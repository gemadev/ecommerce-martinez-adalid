import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { detailId } = useParams();




    useEffect(()=> {
      const URL = `https://62c5fc5f134fa108c260dfcf.mockapi.io/produtcs/${detailId}`
      fetch(URL)
      .then((res) => res.json())
      .then((res)=> setItem(res))
      .catch((error) => console.log(error))
    }, [detailId])
  
  return (
    <ItemDetail item={item}/>
  );
}

export default ItemDetailContainer;
