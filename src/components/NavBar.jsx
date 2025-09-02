import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <CartWidget />
      <div>
        <Link to="/">Todos</Link> |{" "}
        <Link to="/categoria/ropa">Ropa</Link> |{" "}
        <Link to="/categoria/zapatillas">Zapatillas</Link>
      </div>
    </nav>
  );
}

export default NavBar;
