import ItemDetail from '../ItemDetail';
import React, {useState, useEffect} from 'react';

const product = { id:'01', name:'Vaso Termico', description:' ·Material plástico apto para alimentos. ·Capacidad 350 cc. ·Doble vaso con cámara de aire en su interior. ·Cierre con tapa rosca hermético con bebedor. ·Vinilo exterior laminado , resistente a rayaduras y lavados.. ·Apto microondas.' ,img:'https://holadecodistribuidora.com/wp-content/uploads/2020/05/greys-anatomy1.jpeg', stock:30, price: '$350',};

export const ItemDetailContainer = () => {
    const[item, setItem] = useState({});

    useEffect(()=> {
      const getItem = new Promise(resolve => {
        setTimeout(() => {
          resolve(product);
        }, 2000)
      });

      getItem.then(res => setItem(res));
    }, [])
  
  return (
    <ItemDetail item={item}/>
  );
}

export default ItemDetailContainer;
