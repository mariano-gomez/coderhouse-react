import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function App() {

    return (
        <ChakraProvider>
            <NavBar/>
            <ItemListContainer>
                Container para el listado de items (Proximamente)
            </ItemListContainer>
        </ChakraProvider>
    )
}

export default App
