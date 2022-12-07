import Boton from "../Boton/Boton";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";



function ItemDetail({ product }) {

    const [isInCart, setIsInCart] = useState(false);
    
    const { addToCart, cart } = useContext(cartContext);
    function onAddToCart(count) {
    setIsInCart(count);
    addToCart(product, count);
}


    return (
    <div className="card">
        <div className="card-img">
            <img src={product.imgurl} alt="Product img" />
        </div>
        <div className="card-detail">
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <h4 className="priceTag">$ {product.price}</h4>
        </div>
        {isInCart ? (
            <Link to="/cart">
                <Boton>Ir al Carrito</Boton>
        </Link>
        ) : (
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
        )}
    </div>
);
}

export default ItemDetail;