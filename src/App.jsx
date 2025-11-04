import './App.css';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';

function App(){   
  return (
    <BrowserRouter>      
   
     <CartContextProvider>
        <NavBar/> 
        <Routes>
           <Route 
            path="/" 
            element={  <ItemListContainer greeting={"ViajesApp"}/> }
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
             path="/cart"
             element={ <CartContainer /> }
             />
            <Route
              path="*"
              element={ <div><h2>Error 404: No encontramos resultados</h2></div>}
           />
        </Routes>
        </CartContextProvider>
        
    </BrowserRouter>
  )
}


export default App;