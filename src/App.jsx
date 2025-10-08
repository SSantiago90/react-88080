import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App(){   
  return (
    <BrowserRouter>       
        <NavBar/> 
        <Routes>
           <Route 
            path="/" 
            element={  <ItemListContainer greeting={"Tienda de Remeras Dev"}/> }
           />
           <Route
            path="/detail/:idParam"
            element={ <ItemDetailContainer />}
           />
           <Route 
              path="/category/:catParam"
              element={ <ItemListContainer greeting="Categoría de Productos" />}
            />
            <Route
              path="*"
              element={ <div><h2>Error 404: No encontramos resultados</h2></div>}
           />
        </Routes>
        
    </BrowserRouter>
  )
}


export default App;