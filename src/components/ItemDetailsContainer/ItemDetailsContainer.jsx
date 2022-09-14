import React from 'react'
import data from './mock'
import ItemDetails from '../ItemDetails/ItemDetails'
import {useState, useEffect} from 'react'

const ItemDetailsContainer = () => {
  const [item, setItems] = useState([])

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
    <div>
      <ItemDetails itemDetail={item}/>
    </div>
  )
}

export default ItemDetailsContainer
