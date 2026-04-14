"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-pink-500 transition-all group">
      <div className="relative">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {product.files} files
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl">{product.title}</h3>
          <span className="text-3xl font-bold text-pink-400">${product.price}</span>
        </div>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6">{product.description}</p>

        <div className="flex gap-3">
          <Button
            onClick={() => addToCart(product)}
            variant="outline"
            className="flex-1"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button asChild className="flex-1">
            <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
