import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './itemDetail.css'
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
  
    const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  }
  
  return (
    <div className='container'>
      <div className='detail'>
        <div className='content-name'>
            <h1>{item.name}</h1>
            </div>
                <img className='detail__image' src={item.img} alt="" />
            <div className='content'>
                <h1>{item.description}</h1>
            <div className='content-price'>   
                <h1>${item.price}</h1>
            </div>     
          <div>
            {
              goToCart
              ? <Link to='/cart'>Terminar la Compra</Link>
              : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            }
            
          </div>
        </div>
      </div>    
    </div>
  );
}

export default ItemDetail;
