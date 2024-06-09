import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import Item from "../Item/Item.jsx";

const ItemList = ({ products, ...props }) => {
    return (
        <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
            {products.map((el) => (
                <Box key={el.id} m={2}>
                    <Item {...el} />
                </Box>
            ))}
        </Flex>
    );
}

export default ItemList;