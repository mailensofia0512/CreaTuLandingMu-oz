import { useState } from 'react';

function ItemListContainer({ mensaje }) {
  const [saludo, setSaludo] = useState(mensaje);

  return (
    <div>
      <p>{saludo}</p>
      <button onClick={() => setSaludo('¡Gracias por visitar mi tienda!')}>
      </button>
    </div>
  );
}

export default ItemListContainer;