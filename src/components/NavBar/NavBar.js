// import logo from '../../logo.svg';
import logo from './logopau.png';
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
                            <li><a>Inicio</a></li>
                            <li><a>Productos</a></li>
                            <li><a>Clientes</a></li>
                            <li><a>Contacto</a></li>
                            <li><a>Nosotros</a></li>
                            <li><CartWidget/></li>
                        </ul>
                    </nav>
                    
                </div>
            </header>
            
        </div>
    )
}

export default NavBar;