import { useState, useEffect, useContext} from "react";
import cartContext from "../context/cartContext";


function ItemCount( { product }){      
  const [count, setCount] = useState(1)
  const [ limit, setLimit ] = useState(false)
  const maxValue = 10;

  const { addItem } = useContext(cartContext) //{ cart: cartItems, addItem }

  console.log("❗Renderizando ItemCount... ")

  // tarea de montaje
  useEffect( () => {
    console.log("🗂️Consultando base de datos para conocer Stock...")
  }, [ limit])

  function sumar(){
    if (count < maxValue)
      { setCount( count+1 ) }
    else {
      setLimit(true)
    }
  }

  function restar(){
    if (count > 0)
     { setCount( count-1 ) }
  }

  function addToCart(){
    addItem( { ...product, quantity: count } )
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center"}} id="counter-button">
        <button onClick={ restar } >-</button>
        <p>{ count }</p>
        <button onClick={ sumar }>+</button>
      </div>
        {
          limit? <p>Alcanzaste el máximo de productos</p> : <></>
        }
      <button onClick={addToCart}>Agregar</button>
      </div>
  )
}

export default ItemCount;