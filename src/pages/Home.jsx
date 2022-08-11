import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from '../context/CartContext';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import SignIn from "../components/Signin";
import SignUp from "../components/signup";





function Home() {
    return (
        <>
        <BrowserRouter>
        <CartProvider>
        <Announce/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer />}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/detalle/:detailId" element={<ItemDetailContainer />} />
            </Routes>
        </CartProvider>
        <ToastContainer/>
        </BrowserRouter>
        </>     
    );

}

export default Home;