import { getProductById } from "../data/mockAPIService";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

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
   <ItemDetail itemData={itemData} />
  )
}

export default ItemDetailContainer;