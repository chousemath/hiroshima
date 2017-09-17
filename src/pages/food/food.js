import React, { Component } from 'react';
import './food.css';
import Header from '../../common/header/header';

class Food extends Component {
 render() {
   return (
     <div className="Contact">
       <Header
         bannerTitle='happiness, but tastier'
         bannerSubTitle='random assortment of japanese foods' />
       <h1>food</h1>
     </div>
   );
 }
}
export default Food;
