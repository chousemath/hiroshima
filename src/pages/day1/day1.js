import React, { Component } from 'react';
import './day1.css';
import Header from '../../common/header/header';
import Content from '../../common/content/content';

class Day1 extends Component {
 render() {
   return (
     <div className="Contact">
       <Header
         bannerTitle='day 1: landing'
         bannerSubTitle='getting my bearnings, wandering about' />
       <Content
         iconName='japan'
         title='arriving in japan'
         body='lksdf laskdf laksdf alskd falkdsf alksd lsakdf alskdfj alsdkf jalsdkf jaslkdf' />
       <Content
         iconName='japan'
         title='a walk in a garden'
         body='lksdf laskdf laksdf alskd falkdsf alksd lsakdf alskdfj alsdkf jalsdkf jaslkdf'
         imageAlt='shukkeien-1'
         imageUrl='https://s3.ap-northeast-2.amazonaws.com/japan-trip-images/hiroshima-0-0.jpg' />
     </div>
   );
 }
}
export default Day1;
