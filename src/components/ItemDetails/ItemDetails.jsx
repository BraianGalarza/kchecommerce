import React from 'react'

const ItemDetails=({itemDetail})=> {
    console.log(itemDetail)
  return (
    <div className="container">
        <main className="container">
            <section className="tab-content">

                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <div className="tab-pane active" id="project1" role="tabpanel" aria-labelledby="project1-tab">
                    <h1 className="my-4">{itemDetail.name}</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <img className="img-fluid" src={itemDetail.image} alt=""/>
                        </div>
                        <div className="col-md-4">
                            <h3 className="my-3">Descripción</h3>
                            {itemDetail.descripcion}
                            <h3 className="my-3">Detalles</h3>
                            <ul>
                                <li>Stock: {itemDetail.stock}</li>
                                <li>Precio c/u: {itemDetail.precio}</li>
                                <li>Estado: {itemDetail.estado}</li>
                                <li>Medios de Pago: {itemDetail.pago}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  
  </div>
  )
}

export default ItemDetails