import CardBox from "../Card/Card";
import React from "react";

const ItemList = ({itemList}) =>{

    return(
        <>
            {itemList.map((item) => {
                        //   return( <CardBox
                        //     key={item.id}
                        //     name={item.name}
                        //     descripcion={item.descripcion}
                        //     precio={item.precio}
                        //     image={item.image}
                        //     />
                        // );
                    return( <CardBox item={item} key={item.id}/>
                    );
            })}
        </>
    );
};
export default ItemList;