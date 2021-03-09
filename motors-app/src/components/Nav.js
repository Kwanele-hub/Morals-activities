import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {
  const navStyle = {
    color : 'white'
  };



    return (
     <nav className="nav-bar">
       <h3>SPHE MOTORS</h3>

       <ul className='nav-links'>

         {/* <Link style={navStyle} to="/register" >
         <li>Register</li>
         </Link> */}
         <Link style={navStyle} to="/loginForm">
         <li>LoginForm</li>
         </Link>
         <Link style={navStyle} to="/about" >
         <li>About</li>
         </Link>
       </ul>
     </nav>
    );
  }
  
  export default Nav;
  