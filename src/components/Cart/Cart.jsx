import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext.jsx'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex
  } from '@chakra-ui/react'
  import { RiDeleteBin5Line } from "react-icons/ri";
  import {Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)

    return (
        <>
            {
                (cart.length === 0) ?
                    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
                        <Heading>Todavía no agregaste productos al carrito</Heading>
                        <Link to='/'>Volver al catálogo</Link>
                    </Flex>
                    :
                    <>
                        <Box align='center'>
                            <Button onClick={clearCart}>Vaciar carrito </Button>
                            <Button>
                                <Link to='/'>Seguir comprando</Link>
                            </Button>

                        </Box>
                        <TableContainer>
                            <Table variant='striped' colorScheme='orange'>
                                <Thead>
                                    <Tr>
                                        <Th>Nombre</Th>
                                        <Th>Cantidad</Th>
                                        <Th>Precio</Th>
                                        <Th>Subtotal</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        cart.map((prod) => (
                                            <Tr key={prod.id}>
                                                <Td>{prod.name}</Td>
                                                <Td>{prod.quantity}</Td>
                                                <Td>$ {prod.price.toFixed(2)}</Td>

                                                <Td>$ {(prod.price * prod.quantity).toFixed(2)}</Td>
                                                <Td>
                                                    <Button onClick={()=>removeItem(prod.id)}>
                                                        <RiDeleteBin5Line />
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        ))
                                    }
                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>&nbsp;</Th>
                                        <Th colSpan={2}>&nbsp;</Th>
                                        <Th><Heading>$ {getTotal().toFixed(2)}</Heading></Th>
                                        <Th>
                                            <Link to='/checkout'>Finalizar compra</Link>
                                        </Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </>
            }
        </>
    )
}

export default Cart
