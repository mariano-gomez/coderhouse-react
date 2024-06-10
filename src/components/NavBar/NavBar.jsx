import {useEffect, useState} from 'react';
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";
import {
    Button,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Link as ChakraLink,
    Text, Box, Image
} from "@chakra-ui/react";
import logo from '../../assets/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { getCategories } from "../../utils/helperFunctions.js";

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
        <Flex
            h={'10hv'}
            w={'100%'}
            p={4}
            bg={'tomato'}
            justify={'space-between'}
        >
            <Box p='4'>
                <ChakraLink as={Link} width={'30%'} to='/' minWidth={'50px'}>
                    <Image w={'30%'} src={logo} />
                </ChakraLink>
            </Box>
            <Center>
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
            </Center>
            <CartWidget/>
        </Flex>
    );
}

export default NavBar;