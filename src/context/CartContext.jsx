import React, { createContext, useState } from 'react'

export const CartContext = createContext({
})

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        if (isInCart(newItem.id)) {
            const updatedCart = cart.map((prod) => {
                if(prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity }
                }
                return prod
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, newItem])
        }
    }
    const clearCart = () => {
        setCart([])
    }
    const getQuantity = () => {
        return cart.reduce((totalItems, item) => totalItems + item.quantity, 0)
    }
    const getTotal = () => {
        return cart.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)
        setCart([...updatedCart])
    }


  return (
    <CartContext.Provider
        value={{
            cart,
            setCart,
            addItem,
            clearCart,
            getQuantity,
            getTotal,
            isInCart,
            removeItem
        }}>
            {children}
    </CartContext.Provider>

  )
}
