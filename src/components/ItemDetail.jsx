import { ClipLoader, PacmanLoader } from "react-spinners";
import ItemCount from "./ItemCount";
function ItemDetail( { itemData }){
  return (
     <div className="item-card" style={ { border: "solid 1px grey", backgroundColor: "#131111ff", margin: "10px" } }>
     {
       itemData.loading 
        ? <PacmanLoader
            color={"#ff2288"}
            size={50}
          />
        :  <div>
              <img 
                width="120" 
                src={itemData.img} alt="remera-roja"
              /> 
              <h4>{itemData.title}</h4>
              <p>Precio: $ {itemData.price}</p>
              <ItemCount product={itemData} />
              {/* <button onClick={ () => addItem( {...itemData, quantity: 1} )>Agregar al carrito</button> */}
           </div>
     }     
    </div>
  )
}
export default ItemDetail