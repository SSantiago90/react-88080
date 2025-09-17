import Item from "./Item";

function ItemListContainer( props ){
  return (
    <section className="itemlist">
      <h3>-- {props.greeting} -- </h3>
      <Item
       title="Remera Roja JS" 
       img="https://www.mandragorastore.com/wp-content/uploads/2020/10/Desarrollo-Web-Camiseta-JavaScript-Rojo-Cereza.jpg" 
       price="2000" />
      <Item 
       title="Remera React"
       img="https://http2.mlstatic.com/D_NQ_NP_918625-MLA84442117389_052025-O.webp" 
       price="3000"
       />

    </section>
)
}

export default ItemListContainer;