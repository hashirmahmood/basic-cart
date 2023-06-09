import dataItems from '@/data/items.json'
import ItemCard from '@/components/ItemCard'
export default function Home() {
  return (
    <main className="flex gap-10 flex-wrap justify-center mt-4">
      {dataItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </main>
  )
}
