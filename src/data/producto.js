const productos = [
  { id: "1", nombre: "Remera", categoria: "ropa", precio: 2000 },
  { id: "2", nombre: "Zapatillas", categoria: "zapatillas", precio: 10000 },
  { id: "3", nombre: "Pantalón", categoria: "ropa", precio: 5000 },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
};

export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.find((p) => p.id === id)), 2000);
  });
};
