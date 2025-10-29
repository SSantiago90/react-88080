import { Link } from "react-router"
import './Item.css'

export default function Item( props ) {
  const texto = `Soy el producto ${props.title}`
  console.log(texto)

  return <div className="item-card">
    <img 
      width="120" 
      src={ props.img } alt="remera-roja"
    /> 
      <h4>{ props.title }</h4>
      <p>Precio: ${ props.price }</p>

       <Link to={ `/detail/${props.id}` }>
         <button>Ver detalle</button>
       </Link>
  </div>
}

// * REUTILIZABLE
