import '../assets/header.css'
import filter from "/public/icons/filtre.png"
import menu from "/public/icons/menu.png"
import React from 'react';
import { Link } from 'react-router';

function Header() {
    return (
        <>
        <header>
            <div className='header-links'>
                <h1><Link to="/">Piwee!</Link></h1>
                <p>Vètements</p>
                <p>Chaussures</p>
                <p>Accessoires</p>
            </div>
            <div className='header-icons'>
                <img src={filter} alt="" className='header-icon'/>
                <Link to="/cart"><img src={menu} alt="" className='header-icon'/></Link>
                
            </div>
        </header>
        </>
    )
}

export default Header;