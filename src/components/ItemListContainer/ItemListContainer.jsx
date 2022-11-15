import { useState, useEffect } from "react";
import Item from './Item';
import "./ItemList.css"; 
import getItems from "../../Services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
          key={product.id}
          title={product.title}
          price={product.price}
          imgurl={product.imgurl}
          category={product.category}
          id={product.id}
          />
        )

    })}
    </div>
  );
}


export default ItemListContainer