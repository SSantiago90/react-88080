import { useState, useEffect } from "react";


function ItemCount(){    
  const [count, setCount] = useState(1)
  const [ limit, setLimit ] = useState(false)
  const maxValue = 10;

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
  
  return (
    <div id="counter-button">
      <button onClick={ restar } >-</button>
      <p>{ count }</p>
      <button onClick={ sumar }>+</button>
      {
         limit? <p>Alcanzaste el máximo de productos</p> : <></>
      }
    </div>
  )
}

export default ItemCount;