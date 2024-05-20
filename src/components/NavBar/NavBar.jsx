import React from 'react';
import CartWIdget from "../CartWidget/CartWIdget.jsx";
import {Flex, Spacer, Text} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex h={'10hv'} w={'100%'} p={4} bg={'tomato'} justify={'space-between'}>
            <Text>
                Logo
            </Text>
            <CartWIdget/>
        </Flex>
    );
}

export default NavBar;