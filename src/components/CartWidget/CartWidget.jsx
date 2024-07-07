import React from 'react';
import { Button, Link as ChakraLink } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    return (
        <>
            <Button
                variant="ghost"
                leftIcon={<FaShoppingCart />}
            >
                <ChakraLink as={Link} to='/cart' >
                    Carrito
                </ChakraLink>
            </Button>
        </>
    );
}

export default CartWidget;