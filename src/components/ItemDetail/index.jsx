import React from 'react'
import './itemDetail.css'

export const ItemDetail = ({ item }) => {
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
            <h1>{item.price}</h1>
        </div>     
        </div>
    </div>    
    </div>
  );
}

export default ItemDetail;
