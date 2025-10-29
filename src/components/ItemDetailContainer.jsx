import { getProductById } from "../data/FirestoreService";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

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