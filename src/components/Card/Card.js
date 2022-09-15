// import Button from '../../../node_modules/react-bootstrap/Button';
import Card from '../../../node_modules/react-bootstrap/Card';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css'
import { Link } from 'react-router-dom';
// const CardBox = ({name,descripcion,precio,image,key}) =>{
const CardBox = ({item}) =>{
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
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
          {item.precio}
        </Card.Text>
        <ItemCount onAdd={onAdd} initial={1} stock={7} />
        <Link to={`/item/${item.id}`}><button>Detalles</button></Link>
      </Card.Body>
    </Card>
  );
}

export default CardBox;