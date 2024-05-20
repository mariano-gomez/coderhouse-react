import React from 'react';
import {Heading} from "@chakra-ui/react";

const ItemListContainer = (props) => {
    return (
        <div>
            <Heading>
                {props.children}
            </Heading>
        </div>
    );
}

export default ItemListContainer;