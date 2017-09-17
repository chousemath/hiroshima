import React, { Component } from 'react';
import Divider from '../divider/divider';
import './content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }

  render() {
    let revealImage = () => {
      this.setState({
        showImage: !this.state.showImage
      });
    }

    let whichCamera = () => {
      if (this.state.showImage) {
        return <img src={require('../../img/camera-red.png')} className="content-icon-camera" onClick={revealImage} />;
      } else {
        return <img src={require('../../img/camera.png')} className="content-icon-camera" onClick={revealImage} />;
      }
    }

    let showOrHideImg = () => {
      if (this.state.showImage) {
        return (
          <div className="content-container">
            <img src={this.props.imageUrl} alt={this.props.imageAlt} className="content-image" />
          </div>
        );
      }
    }

    let hiddenImage = (imgUrl) => {
      if (imgUrl) {
        return (
          <div className="content-container">
            <div className="content-container">
              {whichCamera()}
            </div>
            {showOrHideImg()}
          </div>
        );
      }
    }

    return (
      <div className="content-container">
        <div className="content-container-inner">
          <div className="content-container">
            <img src={require(`../../img/${this.props.iconName}.png`)} className="content-icon" />
          </div>
          <div className="content-container typewriter">
            <p><b>{this.props.title}</b></p>
            <p>{this.props.body}</p>
          </div>
          {hiddenImage(this.props.imageUrl)}
        </div>
        <Divider />
      </div>
   );
 }
}
export default Content;
