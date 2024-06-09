import React from 'react';
import {Flex, Spacer, Text} from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
    return (
        <Flex h={'10hv'} w={'100%'} p={4} bg={'tomato'} justify={'space-between'}>
            <Text>
                Logo
            </Text>
            <CartWidget/>
        </Flex>
    );
}

export default NavBar;