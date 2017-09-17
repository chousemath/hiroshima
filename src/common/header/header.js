import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './header.css';

class Header extends Component {
 render() {
   return (
     <div>
       <div className="pure-menu pure-menu-horizontal header-container typewriter">
         <ul className="pure-menu-list">
           <li className="pure-menu-item pure-menu-selected"><Link to='/' className="pure-menu-link">Home</Link></li>
           <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
             <a href="#" id="menuLink1" className="pure-menu-link">Blog</a>
             <ul className="pure-menu-children">
               <li className="pure-menu-item"><Link to='/1' className="pure-menu-link">Day 1</Link></li>
               <li className="pure-menu-item"><Link to='/2' className="pure-menu-link">Day 2</Link></li>
             </ul>
           </li>
         </ul>
       </div>
       <div className="header-banner typewriter">
         {this.props.bannerTitle}
       </div>
       <div className="header-banner typewriter">
         {this.props.bannerSubTitle}
       </div>
     </div>
   );
 }
}
export default Header;
