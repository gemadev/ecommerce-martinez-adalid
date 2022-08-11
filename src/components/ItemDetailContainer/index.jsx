import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore, doc , getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { detailId } = useParams();

    useEffect(()=> {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'products', detailId);
      getDoc(queryDoc)
      .then(res => setItem({id: res.id, ...res.data()}))
   //eslint-disable-next-line
  }, [])
  
    if(item.name === undefined){
      return (
        <h1>no existe el producto</h1>
      )
    }else{

  return (
    <ItemDetail item={item}/>
  );}
}

export default ItemDetailContainer;
