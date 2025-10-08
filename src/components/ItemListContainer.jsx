import Item from "./Item";

import getData, { getProductsByCategory } from "../data/mockAPIService.js";
import {useState, useEffect} from "react";
import { useParams } from "react-router";

function ItemListContainer( props ){
  const [viajes, setViajes] = useState([]);
  const { catParam } = useParams(); 
  //  { catParam: "Playa"}
  //  { }

  useEffect(() =>{
    if ( catParam ){
        getProductsByCategory(catParam)
        .then(  (data) => setViajes(data))
    }
    else {
       getData()
      .then( (data) => {
        console.log("Datos recibidos", data)
        setViajes(data)
      })
    }   
  }, [ catParam ])
  

  return (
    <section className="itemlist">
      <h3>-- {props.greeting} -- </h3>
      {
        viajes.map( item =>                  
          <Item 
            key={item.id}
            { ...item}  
          />                   
        ) 
      }
    </section>
)
}

export default ItemListContainer;