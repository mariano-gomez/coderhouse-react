import React, { useContext, useState } from 'react';
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext.jsx";

function ItemDetail({ product: { id, name, stock, price, img, description }, ...props }) {
    const [ quantity, setQuantity ] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (inputQuantity) => {
        const item = {
            id,
            name,
            price,
            img
        }
        addItem(item, inputQuantity)
        setQuantity(inputQuantity)
    }

    return (
        <>
            <Box align='center'>
                <Heading as="h1" size="lg" margin="10px" paddingY="1%">{name}</Heading>
                <Image
                    src={img}
                    alt={name}
                    borderRadius='md'
                    boxSize='100%'
                    objectFit='cover'
                    w={'300px'}
                    h='300px'
                />
                <div>
                    <p>
                        <b>Precio:</b> $ {price.toFixed(2)}
                    </p>
                    <p>
                        <b>Producto:</b> {name}
                    </p>
                    <p>
                        <b>Stock:</b> {quantity}
                    </p>
                    <p>
                        <b>Detalle del producto:</b>
                        <br/>
                        {description}
                    </p>
                    <br/>
                    {
                        quantity ?
                            <Box align='center'>
                                <Box display="flex" width="100%" maxWidth="300px" mb={4}>
                                    <Button borderRadius="0" colorScheme='blue' flex="1">
                                        <Link to='/cart'>Ir al carrito</Link>
                                    </Button>
                                </Box>
                            </Box>
                            :
                            <ItemCount stock={stock} initValue={1} onAdd={onAdd}/>
                    }
                </div>
            </Box>
        </>
    );
}

export default ItemDetail;