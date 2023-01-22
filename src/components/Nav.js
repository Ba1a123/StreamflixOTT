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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU"
        alt="logo"></img>
      </div>
  )
}

export default Nav
