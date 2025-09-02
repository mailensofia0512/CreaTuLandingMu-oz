// ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/producto";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    getProductoPorId(idItem).then((res) => setItem(res));
  }, [idItem]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>}
    </div>
  );
}

export default ItemDetailContainer;
