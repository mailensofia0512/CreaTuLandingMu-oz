import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Todos</Link> |{" "}
      <Link to="/categoria/ropa">Ropa</Link> |{" "}
      <Link to="/categoria/zapatillas">Zapatillas</Link>
    </nav>
  );
}

export default NavBar;
