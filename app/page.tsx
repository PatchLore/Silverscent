import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 py-28 text-center">
        <h1 className="text-7xl font-bold tracking-tighter mb-4">Digital Dreams Studio</h1>
        <p className="text-3xl mb-10">AI Art Packs • Music Packs • Custom Commissions</p>
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
        <h2 className="text-5xl font-bold mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.category !== "custom").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
