import React from "react";
import * as axios from "axios";
import ReactDropzone from "react-dropzone";

class Upload extends React.Component {
  state = {
    fileInfo: null
  };

  onDrop = files => {
    this.setState({
      fileInfo: files[0]
    });
  };

  uploadToDrive(file) {
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    axios.post("api/file", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="rect1">
          <h1 className="bold marg">File Upload</h1>
          <div>
            <ReactDropzone onDrop={this.onDrop} className="rect2">
              Drop a file here to upload!
            </ReactDropzone>
          </div>
          {this.state.fileInfo && (
            <div>
              <ul>name: {this.state.fileInfo.name}</ul>
              <ul className="ul">type: {this.state.fileInfo.type}</ul>
              <ul className="ul">size: {this.state.fileInfo.size}</ul>
            </div>
          )}
          <button
            className="marg"
            onClick={() => this.uploadToDrive(this.state.fileInfo)}
          >
            submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Upload;
