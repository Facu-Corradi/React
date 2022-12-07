import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loaders from "../Loaders/Loaders";
import "./ItemDetail.css";

function ItemDetailContainer() {
const [product, setProduct] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const { idItem } = useParams();

async function getItemsAsync() {

    getSingleItem(idItem).then((respuesta) => {
    setProduct(respuesta);
    setIsLoading(false);
    });
}

useEffect(() => {
    getItemsAsync();
}, []);

if (isLoading) return <Loaders />;

return <ItemDetail product={product} />;
}
export default ItemDetailContainer;