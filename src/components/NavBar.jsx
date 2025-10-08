import CartWidget from "./CartWidget";
import { Link } from "react-router";

function NavBar(){
  return (
    <nav>
      <Link to="/">
          <h4>Logo Tienda</h4>
      </Link>
      <div style={{ display: "flex", gap: "12px", alignItems: "center"}}>
        <Link to="/category/Playa">Playa</Link>
        <Link to="/category/Naturaleza">Naturaleza</Link>
        <Link to="/category/Cultural">Cultural</Link>
        <Link to="/detail">Detalle</Link>
      </div>
      
      <CartWidget />
    </nav>
  )
}
export default NavBar;