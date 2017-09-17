import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header
          bannerTitle='My Trip to Hiroshima'
          bannerSubTitle='Food, programming, and architecture'/>
      </div>
    );
  }
}

export default App;
