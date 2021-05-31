import React from 'react';
import image from '../../image/banner.jpg';
import './Header.css'
const Header = () => {

    return (
        <div>
            <div class='header'>
            <img className='w-100' src={image}alt=""/>
            <p class='heading-text'>English Premier <span>Leage</span> </p>
            </div>
            
        </div>
    );
};

export default Header;