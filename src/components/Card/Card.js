// import Button from '../../../node_modules/react-bootstrap/Button';
import Card from '../../../node_modules/react-bootstrap/Card';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Card.css'
const CardBox = ({name,descripcion,precio,image}) =>{
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <Card className='Card-Producto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          {precio}
        </Card.Text>
        <ItemCount onAdd={onAdd} initial={1} stock={7} />
      </Card.Body>
    </Card>
  );
}

export default CardBox;