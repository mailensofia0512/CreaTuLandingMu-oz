import { useState } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../data/producto";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    getProductos().then((res) => {
      if (idCategoria) {
        setItems(res.filter((item) => item.categoria === idCategoria));
      } else {
        setItems(res);
      }
    });
  }, [idCategoria]);

  return (
    <div>
      <h2>{idCategoria ? `Categoría: ${idCategoria}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
