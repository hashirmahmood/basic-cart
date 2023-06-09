'use client'
import { useCartContext } from '@/context/AppContext'
import dataItems from '@/data/items.json'
import CartItem from './CartItem'
const Cart = () => {
  const { closeCart, itemsArray } = useCartContext()
  return (
    <div className="absolute top-0 right-0 bg-gray-300 w-[500px] h-[700px] flex flex-col gap-16">
      {itemsArray.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <button
        className="bg-red-700 text-white px-3 p-1 rounded-md text-xl"
        onClick={closeCart}
      >
        Close
      </button>
      <div className="text-2xl">
        Total price:{' '}
        {itemsArray.reduce((total, item) => {
          const targetItem = dataItems.find((citem) => citem.id === item.id)
          return total + (targetItem?.price as number) * item.quantity
        }, 0)}
      </div>
    </div>
  )
}
export default Cart
