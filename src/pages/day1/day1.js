import React, { Component } from 'react';
import './day1.css';
import Header from '../../common/header/header';
import Content from '../../common/content/content';

class Day1 extends Component {
 render() {
   return (
     <div className="Contact">
       <Header
         bannerTitle='Day 1: Touchdown'
         bannerSubTitle='Getting my bearnings, wandering about' />
       <Content
         iconName='japan'
         title='Arriving in Hiroshima'
         body='My time at Hiroshima airport was short and not so sweet. The airport itself is not much to look at (sorry airport), and the transportation out of there is efficient and well-organized. It took less than a minute to find the Airport Limousine bus from the airport to Hiroshima train station. I bought my ticket and was on my way.' />
       <Content
         iconName='duck'
         title='A walk in a garden'
         body='As soon as I touched down at Hiroshima station I was eager and ready to hit the ground walking. I typed in "Shukkeien" into Google Maps and away I went.'
         imageAlt='shukkeien-1'
         imageUrl='https://s3.ap-northeast-2.amazonaws.com/japan-trip-images/hiroshima-0-0.jpg' />
       <Content
         iconName='leaves'
         title='Appreciating the quiet'
         body='The Shukkeien garden was a nice and peaceful way to start my trip. Honestly I was not planning on doing anything crazy this trip, so I was introduced to Japanese design and landscaping in a very calming way.'
         imageAlt='shukkeien-2'
         imageUrl='https://s3.ap-northeast-2.amazonaws.com/japan-trip-images/hiroshima-0-1.jpg' />
     </div>
   );
 }
}
export default Day1;
