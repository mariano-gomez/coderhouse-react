import React from 'react';
import {Box, Button} from "@chakra-ui/react";

import {FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="ghost"
                leftIcon={<FaShoppingCart />}
            >
                Carrito
            </Button>

            {/* cart Popup */}
            {isOpen && (
                <Box
                    position="absolute"
                    top="40px"
                    right="0"
                    width="300px"
                    bg="white"
                    padding={4}
                    boxShadow="lg"
                    zIndex={11}
                >
                    <h3>Carrito de compras</h3>

                    <Button onClick={handleClose}>Cerrar</Button>
                </Box>
            )}
        </>
    );
}

export default CartWidget;