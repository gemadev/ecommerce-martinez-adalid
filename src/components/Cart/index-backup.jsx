import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext} from '../../context/CartContext';
import Buyer from '../Buyer' 
import '../Cart/cart.css';



const Cart = () => {

  const { cart, removeProduct,totalPrice} = useCartContext()




  
  return (
      <section className="cartList">
          <h2>Carrito</h2>
          <div>
              {cart.map(product => (
                  <article key={product.id} className="cartItem">
                      <img src={product.img} alt={`foto de ${product.name}`}/>
                      <div>
                      <h3>{product.name}</h3>
                      <p>{product.quantity} x ${product.price}</p>
                      <p className='precio'>Total Parcial : ${product.quantity * product.price}</p>
                      <button className="borrar" onClick={() => removeProduct(product.id)}>borrar</button>

                      </div>
                  </article>
              ))}
          </div>
          {totalPrice() === 0 ? <h4>El carrito está vacio</h4> : <Buyer />}
          {totalPrice() === 0 ? <Link to="/" className="button">seguir comprando</Link> : <></>}
      </section>
      
  )
}


export default Cart