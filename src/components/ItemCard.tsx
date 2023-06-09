'use client'
import { ItemType } from '../../types/ItemType'
import Image from 'next/image'
import { useCartContext } from '@/context/AppContext'
const ItemCard = ({ imgUrl, name, price, id }: ItemType) => {
  const { getItemQuantity, increaseItem, decreaseItem, removeItem } =
    useCartContext()
  const quantity = getItemQuantity(id)
  return (
    <div className="flex flex-col items-center gap-5 border-2">
      <div>
        <Image
          alt=""
          src={imgUrl}
          width={340}
          height={340}
          className="w-[340px] h-[340px] object-cover"
        />
      </div>
      <div>
        <span>{name}</span>
        <span className="mx-10">${price}</span>
      </div>
      {quantity === 0 ? (
        <button
          className="bg-blue-700 text-white text-xl w-[90%] rounded-md p-1"
          onClick={() => increaseItem(id)}
        >
          Add to cart
        </button>
      ) : (
        <div className="flex gap-7 items-center mb-2">
          <button
            className="bg-gray-100 text-xl px-2 rounded-md"
            onClick={() => increaseItem(id)}
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-100 text-xl px-2 rounded-md"
            onClick={() => decreaseItem(id)}
          >
            -
          </button>
          <button
            className="bg-red-700 text-white rounded-md p-2"
            onClick={() => removeItem(id)}
          >
            Remove item
          </button>
        </div>
      )}
    </div>
  )
}
export default ItemCard
