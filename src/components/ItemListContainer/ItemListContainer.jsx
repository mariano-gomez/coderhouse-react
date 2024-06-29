import React, { useState, useEffect } from 'react';
import { Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../config/firebase'
import { BarLoader } from "react-spinners";

const ItemListContainer = ({ title, ...props }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setIsLoading(true);

        //  firebase
        const getData = async () => {
            const itemsCollection = collection(db, 'products')
            const queryRef = !categoryId ?
                itemsCollection :
                query(itemsCollection, where('category', '==', categoryId))

            const response = await getDocs(queryRef);

            const productos = response.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProducts(productos)
            setIsLoading(false)
        }
        getData()
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