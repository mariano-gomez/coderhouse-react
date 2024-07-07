import './App.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from './context/CartContext.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

function App() {

    return (
        <ChakraProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer title={'Tienda (general)'} />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer title={'Tienda'} />} />
                        <Route path='/product/:productId' element={<ItemDetailContainer title={'Detalles del producto'}  />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </ChakraProvider>
    )
}

export default App
