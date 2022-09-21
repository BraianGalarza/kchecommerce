import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetails=({item})=> {
    console.log(item)
    const cartContext = useContext(CartContext)
    const addToCart = (qty) => {
        // alert(`Agregaste ${qty} productos`);
        cartContext.addToCart(item,qty)
      };
  return (
    <div className="container">
        <main className="container">
            <section className="tab-content">

                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <div className="tab-pane active" id="project1" role="tabpanel" aria-labelledby="project1-tab">
                    <h1 className="my-4">{item.name}</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <img className="img-fluid" src={item.image} alt=""/>
                        </div>
                        <div className="col-md-4">
                            <h3 className="my-3">Descripción</h3>
                            {item.descripcion}
                            <h3 className="my-3">Detalles</h3>
                            <ul>
                                <li>Stock: {item.stock}</li>
                                <li>Precio c/u: {item.precio}</li>
                                <li>Estado: {item.estado}</li>
                                <li>Medios de Pago: {item.pago}</li>
                            </ul>
                            <ItemCount onAdd={addToCart} initial={0} stock={item.stock} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
  
  </div>
  )
}

export default ItemDetails