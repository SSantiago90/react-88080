import CartWidget from "./CartWidget";

function NavBar(){
  return (
    <nav>
      <a href="/">Logo Tienda</a>
      <ul>
        <a href="/">Remeras</a>
        <a href="/">Gorros</a>
        <a href="/">Zapatilla</a>
      </ul>
      <CartWidget />
    </nav>
  )
}
export default NavBar;