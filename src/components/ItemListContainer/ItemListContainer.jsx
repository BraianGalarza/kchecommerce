import React from 'react'
import data from './mock'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react'

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])

  const getData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(data)
    },2000)
  })

  useEffect(()=>{
    getData.then((result)=>{
      setItems(result)
      console.log(result)
    })
  },[])

  return (
    <>
      <ItemList itemList={items}/>
    </>
  )
}

export default ItemListContainer