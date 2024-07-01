import React from 'react';
import ItemCount from "../ItemCount/ItemCount.jsx";
import {Box, Heading, Image} from "@chakra-ui/react";

function ItemDetail({ product: { id, name, stock, price, img, description }, ...props }) {

    const onAdd = (count) => {
        console.log('Soon...');
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
                        <b>nombre:</b> {name}
                    </p>
                    <p>
                        <b>Detalle del producto:</b>
                        <br/>
                        {description}
                    </p>
                    <br/>
                    <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
                </div>
            </Box>
        </>
    );
}

export default ItemDetail;