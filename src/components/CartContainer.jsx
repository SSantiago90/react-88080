import { useContext } from "react";
import cartContext from "../context/cartContext";

function CartContainer(){
  const { cart } = useContext(cartContext);

  return <section>
    <h1>Tu carrito de compras</h1>
    <div>
      { cart.map( item => <div key={item.id}>
        <h3>{item.title}</h3>
        <img width="150" src={item.img}></img>
        <p>$ {item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <button>Eliminar</button>
      </div>)}
    </div>
    <hr/>
    <div>
      Total de tu compra: $999
      <button>Ir a pagar</button>
    </div>
  </section>
}

export default CartContainer;