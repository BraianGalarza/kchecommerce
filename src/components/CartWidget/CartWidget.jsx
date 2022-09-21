import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <Link to={"/cart"}>
      <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} size="2x"/>
        <div className="contador-compra">{cart.length}</div>
      </div> 
    </Link>
  );
};

export default CartWidget;
