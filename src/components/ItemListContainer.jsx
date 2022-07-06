import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getData } from '../mocks/fakeApi'

const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

    useEffect(()=>{
      
      fetch('https://62c5fc5f134fa108c260dfcf.mockapi.io/produtcs')
      .then((res) => res.json())
      .then((res)=> setProductList(res))
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))

    
    },[])

  console.log(getData);

  const onAdd = (quantity) => {
      console.log(`Usted quiere ${quantity} unidades`)
  }

  return (
    <div className="landing">
      <span className=" flex flex-1 items-center justify-center">{greeting}</span>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
    </div>
  );
};

export default ItemListContainer;