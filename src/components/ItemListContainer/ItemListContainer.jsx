import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemList.css"; 
import getItems, {getItemsByCategory} from "../../Services/firestore";
import { useParams } from "react-router-dom";
import Loaders from "../Loaders/Loaders";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if (!idCategory) {
      let respuesta = await getItems();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory);
      setProducts(respuesta);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);
  return (
    <div className="catalogo">
      {products ? <ItemList products={products} /> : <Loaders />}
    </div>
  );
}


export default ItemListContainer