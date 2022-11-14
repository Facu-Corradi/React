import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;


