import Item from "./Item";
import "./ItemListContainer.css"


import {useState, useEffect} from "react";
import { useParams } from "react-router";
import getData, {getProductsByCategory} from '../data/FirestoreService.js'

function ItemListContainer( props ){
  getData();
  
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
    <section>
      <h3>{props.greeting}</h3>
      <div  className="itemlist">

      {
        viajes.map( item =>                  
          <Item 
            key={item.id}
            { ...item}  
          />                   
        ) 
      }
      </div>
    </section>
)
}

export default ItemListContainer;