import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Divider from '../divider/divider';

import './header.css';

class Header extends Component {
 render() {
   return (
     <div>
       <div className="pure-menu pure-menu-horizontal header-container typewriter">
         <ul className="pure-menu-list">
           <li className="pure-menu-item pure-menu-selected"><Link to='/' className="pure-menu-link">home</Link></li>
           <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
             <a id="menuLink1" className="pure-menu-link">blog</a>
             <ul className="pure-menu-children">
               <li className="pure-menu-item"><Link to='/food' className="pure-menu-link">food</Link></li>
               <li className="pure-menu-item"><Link to='/code' className="pure-menu-link">code</Link></li>
               <li className="pure-menu-item"><Link to='/landscape' className="pure-menu-link">landscape</Link></li>
               <li className="pure-menu-item"><Link to='/architecture' className="pure-menu-link">architecture</Link></li>
               <li className="pure-menu-item"><Link to='/1' className="pure-menu-link">day 1</Link></li>
               <li className="pure-menu-item"><Link to='/2' className="pure-menu-link">day 2</Link></li>
             </ul>
           </li>
         </ul>
       </div>
       <div className="header-banner typewriter header-banner-top">
         {this.props.bannerTitle}
       </div>
       <Divider />
       <div className="header-banner typewriter">
         {this.props.bannerSubTitle}
       </div>
     </div>
   );
 }
}
export default Header;
