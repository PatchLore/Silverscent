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
    title: "Drum & Bass Energy Pack",
    category: "music",
    price: 12,
    description: "10 high energy DNB tracks • WAV format • Instant download",
    images: ["/images/dnb-pack.jpg"],
    files: 10,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "2",
    title: "Lo-Fi Chill Study Pack",
    category: "music",
    price: 8,
    description: "8 relaxing lo-fi beats • Perfect for focus & studying",
    images: ["/images/lofi-pack.jpg"],
    files: 8,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "3",
    title: "Cinematic Ambient Pack",
    category: "music",
    price: 10,
    description: "6 atmospheric ambient tracks • For films, games & meditation",
    images: ["/images/ambient-pack.jpg"],
    files: 6,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "4",
    title: "Synthwave Retrowave Pack",
    category: "music",
    price: 14,
    description: "12 retro 80s synth tracks + synth presets included",
    images: ["/images/synthwave-pack.jpg"],
    files: 12,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
  {
    id: "5",
    title: "Trap & Hip-Hop Essentials",
    category: "music",
    price: 9,
    description: "9 modern trap beats • Royalty free for commercial use",
    images: ["/images/trap-pack.jpg"],
    files: 9,
    checkoutUrl: "https://yourstore.lemonsqueezy.com/checkout/xxxxxxxx",
  },
];
