import React from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useCartContext} from '../../context/CartContext';
import ItemCart from '../itemCart/index';
import '../Cart/cart.css';

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Gonzalo',
      email: 'gonzalo@gmail.com',
      phone: '541155555555',
      adrdress: 'fake street 123'
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price : product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  
  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({ id })=> console.log(id))
  }

  if(cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    );
  }
  
  return (
    <>  
        {
          cart.map(product => <ItemCart key={product.id} product={product} />)
        }
    <p className='precio'>
      total $: {totalPrice()}
    <button className='borrar' onClick={() => clearCart()}>Borrar toda la compra</button>   
    </p>
    <button onClick={handleClick}>Generar Orden de compra</button>
    </>
  )
}

export default Cart