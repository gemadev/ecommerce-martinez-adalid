import ItemCount from "./ItemCount";
import React from "react";

const ItemListContainer = ({greeting}) => {

  const onAdd = (quantity) => {
      console.log(`Usted quiere ${quantity} unidades`)
  }

  return (
    <div className="landing">
      <span className=" flex flex-1 items-center justify-center">{greeting}</span>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
};

export default ItemListContainer;