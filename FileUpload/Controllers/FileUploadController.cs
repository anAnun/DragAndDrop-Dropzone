using FileUpload.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace FileUpload.Controllers
{
    public class FileUploadController : ApiController
    {
        
        [Route("api/file"), HttpPost]
        public async Task<HttpResponseMessage> Create()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            var filesReadToProvider = await Request.Content.ReadAsMultipartAsync();

            foreach (var stream in filesReadToProvider.Contents)
            {
                var fileBytes = await stream.ReadAsByteArrayAsync();
                File.WriteAllBytes(@"c:\Users/allan/desktop/uploads/file.jpg", fileBytes);
            }
            return new HttpResponseMessage(HttpStatusCode.Created);
        }

    }

}

