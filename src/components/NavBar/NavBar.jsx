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
    Text
} from "@chakra-ui/react";
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
        <Flex h={'10hv'} w={'100%'} p={4} bg={'tomato'} justify={'space-between'}>
            <Text>
                Logo
            </Text>
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