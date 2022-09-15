import React from 'react'
import data from './mock'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const {categoryId} = useParams()
  const [items, setItems] = useState([])

  const getData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(data)
    },2000)
  })

  useEffect(()=>{
    getData.then((result)=>{
      if(categoryId){
        const newItem = result.filter(item=>item.categoria === categoryId)
        setItems(newItem)
      } else{
        setItems(result)
      }
    })
  },[categoryId])

  return (
    <>
      <ItemList itemList={items}/>
    </>
  )
}

export default ItemListContainer