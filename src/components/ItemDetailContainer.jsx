import { getProductById } from "../data/mockAPIService";
import ItemCount from "./ItemCount";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { ClipLoader, PacmanLoader } from "react-spinners";

// ? 1. Leer la URL -> id del producto 
// ? 2. useEffect -> Buscar el producto con el id de la URL
// ? 3. useState -> almacenar los datos del producto

function ItemDetailContainer(){
  const [itemData, setItemData] = useState({ loading: true});
  const{ idParam } = useParams(); 

  useEffect( () => {
    getProductById(idParam).then( res => setItemData(res) )
  }, [])

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
              <ItemCount />
           </div>
     }     
    </div>
  )
}

export default ItemDetailContainer;