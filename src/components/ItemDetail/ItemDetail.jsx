import "./ItemDetail.css";
import Boton from "../boton/Boton";

function ItemDetail({ product }) {
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
        <Boton>Agregar al Carrito</Boton>

    </div>
);
}

export default ItemDetail;