import '../assets/header.css'
import filter from "/public/icons/filtre.png"
import menu from "/public/icons/menu.png"
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';

function Header() {
    const [navActif, setNavActif] = useState(false);

    const toggleNav = () => {
        setNavActif(!navActif); // Change la valeur de navActif (true <-> false)
        };
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
                <div onClick={toggleNav}>
                    <img src={menu} alt="" className='header-icon'/>
                </div>
                {/* <Link to="/cart"><img src={menu} alt="" className='header-icon'/></Link> */}
                
            </div>
            <div className={navActif == true ? "navList active" : "navList"}>
                <ul>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/cart">Panier</Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;