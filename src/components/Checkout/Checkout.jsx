import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Center,
    Heading,
    Button,

  } from '@chakra-ui/react'
import { BarLoader } from "react-spinners"
import { Timestamp, addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatEmail: '',
        dni: '',
        phone: ''
    })
    const [ error, setError ] = useState({})

    const { cart, getTotal, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = 'Tenés que agregar un nombre' 
        }
        
        if (!user.email) {
            errors.email = 'Tenés que agregar un email'
        } else {
            if (!/\S+@\S+\.\S+/.test(user.email)) {
                errors.email = 'El email no es válido'
            }
            if (user.email !== user.repeatEmail) {
                errors.repeatEmail = 'Los emails no coinciden'
            }
        }

        if (!user.dni) {
            errors.dni = 'Tenés que agregar un DNI'
        } else if (!/^\d{7,8}$/.test(user.dni)) {
            errors.dni = 'El DNI debe ser un número de 7 u 8 dígitos, sin puntos'
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const createOrder = async () => {
        setIsLoading(true);

        if (!validateForm()) {
            setIsLoading(false);
            return
        }

        if (cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío!!!",
                text: `Para completar tu compra, el carrito no puede estar vacío`,
                icon: "error",
                confirmButtonText: "Volver al carrito",
            }).then(() => {
                navigate('/cart')
            });
            setIsLoading(false);
            return  // just in case
        }

        const ordersCollection = collection(db, 'orders')
        try {

            for (const item of cart) {
                const docRef = doc(db, 'products', item.id)
                const productDoc = await getDoc(docRef)

                const currentStock = productDoc.data().stock
                if (currentStock >= item.quantity) {
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    Swal.fire({
                        title: "No hay suficiente stock",
                        text: `El producto : ${productDoc.data().name} no tiene suficiente stock`,
                        icon: "error",
                        confirmButtonText: "Volver al carrito",
                    }).then(() => {
                        navigate('/cart')
                    });
                    setIsLoading(false);
                    return
                }
            }

            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(ordersCollection, order)

            Swal.fire({
                title: "Gracias por tu compra",
                text: `El id de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
              }).then(() => {
                setIsLoading(false);
                 clearCart()
                 navigate('/')
              });
        } catch (error) {
            console.log(error)
        }

    }

  return (
      <>
          {

          isLoading ?
              <Center mt='10%'>
                  <BarLoader />
              </Center>
              :
              <Center mt={10}>
                  <Flex direction={'column'} align={'center'} justify={'center'}>

                      <Heading>Datos de facturación</Heading>
                      <Flex w={'100%'} justify={'center'} align={'center'}>
                          <FormControl isInvalid={Object.keys(error).length > 0}>
                              <FormLabel>Nombre</FormLabel>
                              <Input
                                  type='text'
                                  name='name'
                                  placeholder='Tu nombre y apellido'
                                  onChange={updateUser}
                              />
                              <FormErrorMessage>{error.name}</FormErrorMessage>
                              <FormLabel>Email</FormLabel>
                              <Input
                                  type='email'
                                  name='email'
                                  placeholder='tumail@dominio.com'
                                  onChange={updateUser}
                              />
                              <FormErrorMessage>{error.email}</FormErrorMessage>
                              <FormLabel>Repetir email</FormLabel>
                              <Input
                                  type='email'
                                  name='repeatEmail'
                                  placeholder='tumail@dominio.com'
                                  onChange={updateUser}
                              />
                              <FormErrorMessage>{error.repeatEmail}</FormErrorMessage>
                              <FormLabel>DNI</FormLabel>
                              <Input
                                  type='text'
                                  name='dni'
                                  placeholder='35123987'
                                  onChange={updateUser}
                              />
                              <FormErrorMessage>{error.dni}</FormErrorMessage>
                              <FormLabel>Teléfono</FormLabel>
                              <Input
                                  type='text'
                                  name='phone'
                                  placeholder='11223344'
                                  onChange={updateUser}
                              />
                          </FormControl>
                      </Flex>
                      <Button mt={5} onClick={createOrder}>
                          Finalizar compra
                      </Button>
                  </Flex>
              </Center>
          }
      </>
  )
}

export default Checkout
