import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

function CartWidget() {
  return (
    <div>
        <Badge badgeContent={1} color='secondary'>
        <ShoppingCartOutlined/>
        </Badge>
    </div>    
  )
}

export default CartWidget
