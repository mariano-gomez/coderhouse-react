import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
    Link as ChakraLink,
    Image,
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import { getCategories } from "../../utils/helperFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "../CartWidget/CartWidget.jsx";
import logo from '../../assets/Logo.png'

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categories = getCategories()
        categories.then((data) => {
            setCategories(data)
        })
            .catch((error) => console.log(error))
    },[])

    return (
        <Box
            as="header"
            bg="tomato"
            position="sticky"
            top="0"
            zIndex={10}
            boxShadow="sm"
        >
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding={3}
                width="full"
            >
                {/* left section (logo) */}
                <Box maxW={'30%'}>
                    <ChakraLink as={Link} to='/'>
                        <Image w={'15%'} src={logo} />
                    </ChakraLink>
                </Box>

                {/* center section (menu) */}
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FontAwesomeIcon icon={faAngleDown} />}>
                            Todas las categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to='/'>Todas las categorias</Link>
                            </MenuItem>
                            {
                                categories &&
                                categories.map(category => (
                                    <MenuItem key={category}>
                                        <Link to={'/category/' + category}>{category}</Link>
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </Box>

                {/* right section (cart) */}
                <Box>
                    <CartWidget/>
                </Box>
            </Flex>
        </Box>
    );
};

export default NavBar;
