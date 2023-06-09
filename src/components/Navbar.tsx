'use client'
import { useCartContext } from '@/context/AppContext'
import Cart from './Cart'
const Navbar = () => {
  const { openCart, isOpen, totalQuantity } = useCartContext()
  return (
    <nav className="shadow-md p-3 flex justify-between relative">
      <h2 className="text-2xl font-bold">Shopping App</h2>

      <div className="">
        <button
          className="bg-blue-700 text-white p-2 px-4 rounded-md"
          onClick={openCart}
        >
          Cart
        </button>
        <span className="bg-red-600 text-white p-3 rounded-xl mx-4">
          {totalQuantity}
        </span>
      </div>

      {isOpen && <Cart />}
    </nav>
  )
}
export default Navbar
