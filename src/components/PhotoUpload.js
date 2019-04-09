import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

// COMPONENTE PARA PODER SUBIR FOTOS (URL) A LA BASE DE DATOS

class ProfilePage extends Component {

  state = {
    username: '',
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: ''
  };

  handleChangeUsername = (event) => this.setState({ username: event.target.value });

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = (progress) => this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then((url) => {
        this.setState({
          avatarURL: url
        })
        this.props.onUploading(url);  
      }
      );
  };
  render() {
    return (
      <div>
          {this.state.isUploading &&
            <p className="p-upload">Progress: {this.state.progress}</p>
          }
        <form className="buttons-container">
          {/* {this.state.avatarURL &&
            <img src={this.state.avatarURL} alt="uploading" />
          } */}
          <label class="edit-button">
            Upload Image
            <FileUploader
              hidden
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={firebase.storage().ref('images')}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default ProfilePage;