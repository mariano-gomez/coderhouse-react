import React, { useContext } from 'react';
import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext.jsx";

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <>
            <Button
                variant="ghost"
                leftIcon={<FaShoppingCart />}
            >
                <ChakraLink as={Link} to='/cart' >
                    Carrito ({getQuantity()})
                </ChakraLink>
            </Button>
        </>
    );
}

export default CartWidget;