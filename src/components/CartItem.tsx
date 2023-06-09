'use client'
import Image from 'next/image'
import dataItems from '@/data/items.json'
import { useCartContext } from '@/context/AppContext'
const CartItem = ({ id, quantity }: { id: number; quantity: number }) => {
  const { removeItem } = useCartContext()
  const targetItem = dataItems.find((item) => item.id === id)
  if (!targetItem) return null
  return (
    <div className="flex items-center gap-2">
      <Image
        src={targetItem?.imgUrl}
        alt=""
        width={130}
        height={130}
        className="w-[130px] h-[130px] object-cover"
      />
      <div className="flex flex-col gap-3 text-xl">
        <span>{targetItem.name}</span>
        <span>${targetItem.price}</span>
        <span>Quantity: {quantity}</span>
      </div>
      <div className="ml-3">
        <button
          className="bg-red-700 text-xl px-3 p-1 text-white rounded-md"
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
        <br />
        <span>Item total: {quantity * targetItem.price}</span>
      </div>
    </div>
  )
}
export default CartItem
