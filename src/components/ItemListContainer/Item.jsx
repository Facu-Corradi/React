import React from 'react'
import "./Item.css";
import Boton from '../boton/Boton';
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, id }) {
    const urlDetail = `/detail/${id}`;
    return (
    <div className="card">
        <div className="card-img">
            <img src={imgurl} alt={title} />
        </div>
        <div className="card_detail">
            <h3>{title}</h3>
            <h4 className="priceTag">$ {price}</h4>
        </div>
        <Link to={urlDetail} className='boton'>
            <Boton>Ver mas</Boton>
        </Link>
    </div>
    );
}

export default Item;
