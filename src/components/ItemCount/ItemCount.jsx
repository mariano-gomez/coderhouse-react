import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'

const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [ count, setCount ] = useState(1)

    const increase = () => {
        count < stock && setCount(count + 1)
    }

    const decrease = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Box align='center'>
        <Box display="flex" width="100%" maxWidth="300px" mb={4}>
            <Button borderRadius="0" colorScheme='blue' onClick={decrease} flex="1">
                -
            </Button>
            <Box as="span" flex="1" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                {count}
            </Box>
            <Button borderRadius="0" colorScheme='blue' onClick={increase} flex="1">
                +
            </Button>
        </Box>
        <Button borderRadius="0" colorScheme='blue' width="100%" maxWidth="300px" onClick={() => onAdd(count)}>
            Agregar al carrito
        </Button>

    </Box>
  )
}

export default ItemCount
