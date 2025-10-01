import Item from "./Item";

import getData from "../data/mockAPIService.js";
import {useState, useEffect} from "react";

// * 1. Crear un estado -> useState
// * 2. hacer el "fetch" de datos en un useEffect
function ItemListContainer( props ){
  const [viajes, setViajes] = useState([]);
  // getData simula un fetch
  useEffect(() =>{
    getData()
    .then( (data) => {
      console.log("Datos recibidos", data)
      setViajes(data)
    })
    .catch()
  }, [])
  

  return (
    <section className="itemlist">
      <h3>-- {props.greeting} -- </h3>
      {
        viajes.map( item =>                  
        <Item 
          title={ item.title } 
          price={ item.price } 
          img={ item.img }
          />                   
        ) 
      }
    </section>
)
}

export default ItemListContainer;