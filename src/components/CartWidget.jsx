import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import {useCartContext } from '../context/CartContext'

function CartWidget() {
  const { totalProducts } = useCartContext();
  return (
    <div>
        <Badge overlap="rectangular" badgeContent={totalProducts()} color='secondary'>
        <ShoppingCartOutlined/>
        </Badge>
    </div>    
  )
}

export default CartWidget
