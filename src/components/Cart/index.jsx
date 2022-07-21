import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext} from '../../context/CartContext';
import ItemCart from '../itemCart/index'
import '../Cart/cart.css'

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartContext();

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
    </>
  )
}

export default Cart