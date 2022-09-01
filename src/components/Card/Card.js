import Button from '../../../node_modules/react-bootstrap/Button';
import Card from '../../../node_modules/react-bootstrap/Card';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
function CardBox() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <Card className='Card-Producto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./logo512.png" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>
          Descripción del Producto
        </Card.Text>
        <ItemCount onAdd={onAdd} initial={1} stock={7} />
        <br/>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBox;