import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import {Center} from "@chakra-ui/react";
import {BarLoader} from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

function ItemDetailContainer(props) {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true);
        const getData = async () => {

            const queryRef = doc(db, 'products', productId);
            const response = await getDoc(queryRef)
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProduct(newItem)
            setIsLoading(false)
        }
        getData();
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