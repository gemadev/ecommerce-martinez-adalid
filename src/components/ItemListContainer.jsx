import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';


const ItemListContainer = () => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const { categoryId } = useParams();


    useEffect(()=>{
      
      const URL = categoryId 
      ? `https://62c5fc5f134fa108c260dfcf.mockapi.io/${categoryId}`
      : 'https://62c5fc5f134fa108c260dfcf.mockapi.io/produtcs';

      fetch(URL)
      .then((res) => res.json())
      .then((res)=> setProductList(res))
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))
    },[categoryId])


  return (
    <div className="landing">
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
    </div>
  );
};

export default ItemListContainer;