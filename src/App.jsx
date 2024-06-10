import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

function App() {

    return (
        <ChakraProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer title={'Tienda (general)'} />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer title={'Tienda'} />} />
                    <Route path='/product/:productId' element={<ItemDetailContainer title={'Detalles del producto'}  />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
