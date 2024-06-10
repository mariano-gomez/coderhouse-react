import React, { useState } from 'react'
import {Box, Button, ButtonGroup, Flex} from '@chakra-ui/react'

const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [ count, setCount ] = useState(1)

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Box align='center'>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
            {count}
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Box>
  )
}

export default ItemCount
