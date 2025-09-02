// ItemDetail.jsx
function ItemDetail({ item }) {
  return (
    <div>
      <h2>{item.nombre}</h2>
      <p>Precio: ${item.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
