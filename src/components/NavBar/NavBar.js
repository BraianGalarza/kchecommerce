import logo from '../../logo.svg';
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';



const NavBar = () => {
    return(
        <div className='header'>
            <header>
                <div className='menu'>
                    <img className='logo' src={logo} alt="logo"/>
                    <nav className='nav_menu'>
                        <ul>
                            <li><a href="">Inicio</a></li>
                            <li><a href="">Productos</a></li>
                            <li><a href="">Clientes</a></li>
                            <li><a href="">Contacto</a></li>
                            <li><a href="">Nosotros</a></li>
                            <li><CartWidget /></li>
                        </ul>
                    </nav>
                    
                </div>
            </header>
            
        </div>
    )
}

export default NavBar;