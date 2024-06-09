import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { getProductById } from "../../utils/helperFunctions.js";
import {Center} from "@chakra-ui/react";
import {BarLoader} from "react-spinners";

function ItemDetailContainer(props) {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true);
        getProductById(productId)
            .then(productData => {
                if (!productData) {
                    // navigate('/*')
                }
                if (productData) {
                    setProduct(productData)
                } else {
                    alert ('No hay producto')
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    },[productId])

    return (
        <>
            {
                isLoading ?
                    <Center mt='10%'>
                        <BarLoader />
                    </Center>
                    :
                    <ItemDetail product={product} />
            }
        </>
    );
}

export default ItemDetailContainer;