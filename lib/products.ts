export type Product = {
  id: string;
  title: string;
  category: "art" | "music" | "custom";
  price: number;
  description: string;
  images: string[];
  files: number;
  checkoutUrl: string;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Pink Gamer Girl Pack",
    category: "art",
    price: 19,
    description: "15 high-res PNGs + variations • Instant download",
    images: ["/images/pink-gamer.jpg"],
    files: 15,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "2",
    title: "Lotus Moon Goddess Pack",
    category: "art",
    price: 24,
    description: "12 celestial prints + phone backgrounds • Instant download",
    images: ["/images/lotus-goddess.jpg"],
    files: 12,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "3",
    title: "Y2K Red E-Girl Pack",
    category: "art",
    price: 17,
    description: "14 trendy portraits + stickers • Instant download",
    images: ["/images/red-y2k.jpg"],
    files: 14,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "4",
    title: "Chill Synthwave Music Pack",
    category: "music",
    price: 29,
    description: "8 original tracks + stems + artwork • Instant download",
    images: ["/images/music-pack.jpg"],
    files: 12,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "5",
    title: "Custom Art Commission",
    category: "custom",
    price: 49,
    description: "You send photo → I turn you into any style (gamer, goddess, Y2K)",
    images: ["/images/custom.jpg"],
    files: 1,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
];
