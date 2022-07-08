import React from "react";
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    const {img, name, description, price, id} = product
    return (
        <div className="card" style={{width: '20rem', margin:'.5rem'}}>
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
            <p className="card-text">{name}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
        </div>
        <Link to={`/detalle/${id}`}>Ver detalle</Link>    
    </div>
    );
};

export default Item