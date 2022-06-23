import React from "react";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="landing">
      <span className=" flex flex-1 items-center justify-center">{greeting}</span>
    </div>
  );
};

export default ItemListContainer;