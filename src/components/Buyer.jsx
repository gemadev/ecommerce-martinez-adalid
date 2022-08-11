import { useState } from "react";
import { db } from "../firebase/config";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useCartContext} from '../context/CartContext';
import emailjs from 'emailjs-com';
import React from 'react';


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_9i9ch3c', 'template_0itr9tc', e.target, 'f1E6hWb46MbPyzKkz')
    .then((result) => {
      toast.success("Email enviado con exito")
    }, (error) => {
      toast.error(error.text);
    });
    e.target.reset();
};

let id = ''
const Buyer = () => {
  const [buyer, setBuyer] = useState({ nombre: '', telefono: '', email: '', buy_id: `${id}` })

  const { cart, totalPrice, clearCart } = useCartContext()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value
    })
  }
  const endPurchase = () => {
    const orders = {
      buyer,
      items: cart,
      date: serverTimestamp(),
      total: totalPrice()
    }

    const ordersCollection = collection(db, "orders")
    const pedido = addDoc(ordersCollection, orders)
    
    

    if (buyer.nombre && buyer.telefono && buyer.email) {
      pedido
        .then(res => {
          toast.success("Finalizo la compra!" + "Id : " + res.id)
          id = res.id
        })
        .catch(error => {
          toast.error("hubo un error!")
        })
        .finally(() => {
          clearCart()
        })
    } else {
      toast.error("Por favor complete los datos del comprador", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
  return (
    <section className="buyer">
      <h4>Precio total: ${totalPrice()}</h4>
      <button className="button" onClick={() => { clearCart() }} >Vaciar Carrito</button>
      <div>
        <p>Datos del comprador</p>
        <form className="form" onSubmit={sendEmail}>
          <input value={buyer.nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleChange} required />
          <input value={buyer.telefono} name="telefono" type="number" placeholder="Telefono" onChange={handleChange} required />
          <input value={buyer.email} name="email" type="email" placeholder="Email" onChange={handleChange} required/>
          <input value={buyer.buy_id} name="buy_id" hidden></input>
        <button type="submit" className="button" onClick={() => endPurchase() }>Finalizar compra</button>
        </form>
      </div>
    </section>
  )
}
export default Buyer