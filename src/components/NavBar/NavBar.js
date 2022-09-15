// import logo from '../../logo.svg';
import logo from './logopau.png';
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className='header'>
            <header>
                <div className='menu'>
                    <img className='logo' src={logo} alt="logo"/>
                    <nav className='nav_menu'>
                        <ul>
                            <li><Link to={'/'}>Inicio</Link></li>
                            <li><Link to={'/productos'}>Productos</Link></li>
                            <li><Link to={'/productos/tatoos'}>Tatoos</Link></li>
                            <li><Link to={'/productos/herramientas'}>Herramientas</Link></li>
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