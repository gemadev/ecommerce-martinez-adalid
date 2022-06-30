import React from "react";

const Item = ({product}) => {
    const {img, name, description} = product
    return (
        <div className="card" style={{width: '20rem', margin:'.5rem'}}>
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
            <p className="card-text">{name}</p>
            <p className="card-text">{description}</p>
        </div>
        <button className="btn btn-prymary">Ver mas</button>    
    </div>
    )
}

export default Item