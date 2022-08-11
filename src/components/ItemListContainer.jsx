import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import { getFirestore, collection , getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const { categoryId } = useParams();


    useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'products');
      if (categoryId) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
          .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data() }))))
          .finally(()=>setLoading(false))
      } else {
        getDocs(queryCollection)
        .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data() }))))
        .finally(()=>setLoading(false))
      }
    },[categoryId])


  return (
    <div className="landing">
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
    </div>
  );
};

export default ItemListContainer;