import React from 'react';
import './nav.css';
import './streamflixlogo.png';

function Nav() {
  return (
    <div className="nav">
        <img
        className="nav_logo"
        src='streamflix.png'
        alt="streamflix logo" style={{
            backgroundColor:"blue"
        }} > 
        </img>
        <img className="nav_avatar"
        src="streamflix.png"
        alt="logo"></img>
      </div>
  )
}

export default Nav
