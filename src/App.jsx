import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App(){
  
  console.log("Hola desde App.jsx")

  return (
    <>    
    <NavBar/>
    <div className="box">        
      <h1>Hola React</h1>
    </div>
    <div id="div2">
      <h2>Bienvenidos a la clase 2</h2>
    </div>
    <ItemListContainer greeting="Tienda De Remeras Dev" /> 
   </>
  )
}


export default App;