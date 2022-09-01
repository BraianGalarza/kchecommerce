import Button from '../../../node_modules/react-bootstrap/Button';
import Card from '../../../node_modules/react-bootstrap/Card';
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
function BasicExample() {
  return (
    <Card className='Card-Producto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./logo512.png" />
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Text>
          Descripción del Producto
        </Card.Text>
        <ItemCount/>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;