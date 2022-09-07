import CardBox from "../Card/Card";
import React from "react";

const ItemList = ({itemList}) =>{

    return(
        <>
            {itemList.map((producto) => {
                    return( <CardBox
                        name={producto.name}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        image={producto.image}
                        />
                    );
            })}
        </>
    );
};
export default ItemList;