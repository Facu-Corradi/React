import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext"
import CartView from "./components/CartView/CartView";
import Thks from "./components/Thks/Thks"

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/thankyou/:idOrder" element={<Thks />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}



export default App;


