import React from 'react';
import ItemCount from "../ItemCount/ItemCount.jsx";
import {Box, Image} from "@chakra-ui/react";

function ItemDetail({ product: { id, name, stock, price, img, description }, ...props }) {

    const onAdd = (count) => {
        console.log('Soon...');
    }

    return (
        <Box align='center'>
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
                    <b>Precio:</b> ${price}
                </p>
                <p>
                    <b>nombre:</b> ${name}
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
    );
}

export default ItemDetail;