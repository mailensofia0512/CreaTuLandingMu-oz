// ItemList.jsx
import Item from "./Item";

function ItemList({ items }) {
  return (
    <div>
      {items.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
}

export default ItemList;
