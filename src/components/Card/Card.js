// import Button from '../../../node_modules/react-bootstrap/Button';
import Card from '../../../node_modules/react-bootstrap/Card';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

// const CardBox = ({name,descripcion,precio,image,key}) =>{
const CardBox = ({item}) =>{
  const cartContext = useContext(CartContext)
  const addToCart = (qty) => {
    // alert(`Agregaste ${qty} productos`);
    cartContext.addToCart(item,qty)
  };
  return (
    <Card className='Card-Producto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Card.Text>
          ${item.precio}
        </Card.Text>
        <ItemCount  stock={item.stock} initial={0} onAdd={addToCart} />
        <Link to={`/item/${item.id}`}><button>Detalles</button></Link>
      </Card.Body>
    </Card>
  );
}

export default CardBox;