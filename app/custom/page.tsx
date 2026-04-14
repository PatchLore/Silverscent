import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export default function CustomPage() {
  const customProduct = products.find(p => p.category === "custom")!;

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h1 className="text-6xl font-bold mb-6">Custom Art Commission</h1>
        <p className="text-2xl text-zinc-400 mb-12">
          Send me your photo and I'll transform you into any of my styles (Pink Gamer, Lotus Goddess, Y2K E-Girl, or describe your own).
        </p>

        <div className="bg-zinc-900 rounded-3xl p-10 mb-10">
          <p className="text-pink-400 text-xl font-semibold mb-2">Starting at</p>
          <p className="text-7xl font-bold mb-8">${customProduct.price}</p>
          <Button asChild size="lg" className="text-xl px-16 py-8">
            <a href={customProduct.checkoutUrl} target="_blank" rel="noopener noreferrer">
              Start Custom Order →
            </a>
          </Button>
        </div>

        <p className="text-sm text-zinc-500">
          After purchase you will receive an order form to upload your photo and choose style.
        </p>
      </div>
    </div>
  );
}
