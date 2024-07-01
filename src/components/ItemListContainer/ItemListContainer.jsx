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

        //  we fetch the products list from firestore
        const getProductsFromFirestore = async () => {
            const itemsCollection = collection(db, 'products')

            //  if there's a selected category, we only fetch the products linked to that category. Otherwise, we fetch all
            const queryRef = !categoryId ?
                itemsCollection :
                query(itemsCollection, where('category', '==', categoryId))

            const productsFromFirestore = await getDocs(queryRef);

            const parsedProducts = productsFromFirestore.docs.map((prodFromFirestore) => {
                return {
                    ...prodFromFirestore.data(),
                    id: prodFromFirestore.id
                }
            })
            setProducts(parsedProducts)
            setIsLoading(false)
        }
        getProductsFromFirestore()
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