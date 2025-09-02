import { useState } from 'react';

function SaludoContainer({ mensaje }) {
  const [saludo, setSaludo] = useState(mensaje);

  return (
    <div>
      <p>{saludo}</p>
      <button onClick={() => setSaludo('¡Gracias por visitar mi tienda!')}>
        Cambiar saludo
      </button>
    </div>
  );
}

export default SaludoContainer;
