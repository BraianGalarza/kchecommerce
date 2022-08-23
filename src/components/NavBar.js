import logo from '../logo.svg';
import React from 'react';
import './styles.css';


const NavBar = () => {
    return(
        <div className='header'>
        <header>
            <div className='menu'>
                <img className='logo' src={logo} alt="logo"/>
                <nav className='nav_menu'>
                    <ul>
                        <li><a href="">Info</a></li>
                        <li><a href="">Clientes</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Proyectos</a></li>
                        <li><a href="">Nosotros</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
    )
}

export default NavBar;