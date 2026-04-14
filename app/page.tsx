import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 py-28 text-center">
        <h1 className="text-7xl font-bold tracking-tighter mb-4">Digital Dreams Studio</h1>
        <p className="text-2xl mb-3">Royalty-free AI-generated music & art packs designed for modern content creators.</p>
        <p className="text-xl text-zinc-200 mb-8">Commercial license included. No attribution required.</p>
        <a href="/license" className="text-pink-300 hover:text-pink-200 underline mb-10 inline-block">Read Licensing Terms →</a>
        <div className="flex justify-center gap-6">
          <Link
            href="/shop"
            className="bg-white text-black px-10 py-5 rounded-3xl text-2xl font-semibold hover:scale-105 transition"
          >
            Browse All Packs
          </Link>
          <Link
            href="/custom"
            className="border-2 border-white px-10 py-5 rounded-3xl text-2xl font-semibold hover:bg-white hover:text-black transition"
          >
            Order Custom Art
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold mb-2">Royalty-Free Music Packs</h2>
        <p className="text-zinc-400 text-xl mb-10">by Genre • Instant download • Commercial license included</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.category === "music").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
