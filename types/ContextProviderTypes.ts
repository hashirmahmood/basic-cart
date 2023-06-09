export type ContextProviderType = {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  increaseItem: (id: number) => void
  decreaseItem: (id: number) => void
  getItemQuantity: (id: number) => number
  removeItem: (id: number) => void
  totalQuantity: number
  itemsArray: { id: number; quantity: number }[]
}
