import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';

export const ItemDetailContainer = () => {
    const[item, setItem] = useState({});

    useEffect(()=> {
      fetch('https://62c5fc5f134fa108c260dfcf.mockapi.io/produtcs/1')
      .then((res) => res.json())
      .then((item)=> setItem(item))
      .catch((error) => console.log(error))
    }, [])
  
  return (
    <ItemDetail item={item}/>
  );
}

export default ItemDetailContainer;
