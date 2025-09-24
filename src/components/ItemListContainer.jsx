import Item from "./Item";
import viajes from '../data/data.js';
import getData from "../data/mockAPIService.js";

function ItemListContainer( props ){
  // async/await
  // then/catch
  getData()
  .then( (data) => console.log("Datos recibidos", data))
  .catch()

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