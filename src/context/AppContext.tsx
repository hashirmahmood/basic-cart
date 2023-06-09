'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { ContextProviderType } from '../../types/ContextProviderTypes'
type ItemType = {
  id: number
  quantity: number
}
type ChildrenType = {
  children: ReactNode
}

const cartContext = createContext({} as ContextProviderType)

export const useCartContext = () => {
  return useContext(cartContext)
}

const AppContext = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState(true)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const [itemsArray, setItemsArray] = useState<ItemType[]>([])

  const getItemQuantity = (id: number) => {
    const targetItem = itemsArray.find((item) => id === item.id)
    return targetItem?.quantity || 0
  }

  const increaseItem = (id: number) => {
    const targetItem = itemsArray.find((item) => item.id === id)
    if (!targetItem) {
      setItemsArray((item) => [...item, { id, quantity: 1 }])
    } else if (targetItem) {
      const newItemArray = itemsArray.map((item) => {
        if (id === item.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setItemsArray(newItemArray)
    }
  }

  const decreaseItem = (id: number) => {
    const targetItem = itemsArray.find((item) => item.id === id)
    if (targetItem) {
      if (targetItem.quantity === 1) {
        setItemsArray(() => {
          return itemsArray.filter((i) => i.id !== id)
        })
      } else {
        const newItemArray = itemsArray.map((item) => {
          if (id === item.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
        setItemsArray(newItemArray)
      }
    }
  }

  const removeItem = (id: number) => {
    setItemsArray(() => {
      return itemsArray.filter((i) => i.id !== id)
    })
  }

  const totalQuantity = itemsArray.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <cartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        increaseItem,
        decreaseItem,
        getItemQuantity,
        removeItem,
        totalQuantity,
        itemsArray,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
export default AppContext
