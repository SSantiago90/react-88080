import CartWidget from "./CartWidget";
import './NavBar.css';

import { Link } from "react-router";

function NavBar(){
  return (
    <nav className="nav-menu">
      <Link className="nav-logo" to="/">
          <h4>Logo Tienda</h4>
      </Link>
      <div style={{ display: "flex", gap: "12px", alignItems: "center"}}>
        <Link className="nav-item" to="/category/Playa">Playa</Link>
        <Link className="nav-item" to="/category/Naturaleza">Naturaleza</Link>
        <Link className="nav-item" to="/category/Cultural">Cultural</Link>
        <Link className="nav-item" to="/category/Aventura">Aventura</Link>
        <Link className="nav-item" to="/detail">Detalle</Link>
      </div>
      
      <CartWidget />
    </nav>
  )
}
export default NavBar;