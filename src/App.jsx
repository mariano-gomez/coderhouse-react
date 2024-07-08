import './App.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from './context/CartContext.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
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
                        <Route path='/cart' element={<Cart title={'Tu Carrito'}/>}/>
                        <Route path='/checkout' element={<Checkout title={'Finalizar compra'} />}/>
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </ChakraProvider>
    )
}

export default App
