import React from 'react'
import data from '../ItemListContainer/mock'
import ItemDetails from '../ItemDetails/ItemDetails'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


const ItemDetailsContainer = () => {
  const {itemId} = useParams()
  const [item, setItems] = useState({})

  const getData = (id) =>{
      return new Promise((resolve,reject)=>{
        const item = data.find(item=>item.id === parseInt(id))
         resolve(item)
      })
    }
  useEffect(()=>{
    // getData.then((result)=>{
    //   if(itemId){
    //     const newItem = result.filter(item=>item.id === itemId)
    //     console.log(newItem)
    //     setItems(newItem)
    //   } else{
    //     setItems(result)
    //   }
    const getProducto = async()=>{
      const producto = await getData(itemId)
      console.log(producto)
      setItems(producto)
    }
    getProducto()
    
  },[itemId])

  return (
    <div>
      <ItemDetails item={item}/>
    </div>
  )
}

export default ItemDetailsContainer
