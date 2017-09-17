import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          bannerTitle='my trip to japan'
          bannerSubTitle='food, code, landscape, and architecture'/>
        <div className="section-container">
          <div className="section">
            <div className="section">
              <img src={require('./img/sushi.png')} className="img-styling" />
            </div>
            <div className="section typewriter">food</div>
          </div>
          <div className="section">
            <div className="section">
              <img src={require('./img/ruby.png')} className="img-styling" />
            </div>
            <div className="section typewriter">code</div>
          </div>
          <div className="section">
            <div className="section">
              <img src={require('./img/forest.png')} className="img-styling" />
            </div>
            <div className="section typewriter">landscape</div>
          </div>
          <div className="section">
            <div className="section">
              <img src={require('./img/castle.png')} className="img-styling" />
            </div>
            <div className="section typewriter">architecture</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
