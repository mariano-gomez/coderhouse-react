import React, { useState, useEffect } from 'react';
import { Center, Heading} from "@chakra-ui/react";
import { useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import {getProducts, getProductsByCategory} from "../../utils/helperFunctions.js";
import { BarLoader } from "react-spinners";

const ItemListContainer = ({ title, ...props }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setIsLoading(true);
        const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
        dataProducts.then((data) => {
            setProducts(data)
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false))
    },[categoryId])

    return (
        <div>
            <Heading align='center'>
                {title + (categoryId ? ` (${categoryId})` : '')}
            </Heading>
            {
                isLoading ?
                    <Center mt='10%'>
                        <BarLoader />
                    </Center>
                    :
                    <ItemList products={products} />
            }
        </div>
    );
}

export default ItemListContainer;