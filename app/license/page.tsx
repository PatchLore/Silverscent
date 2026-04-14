import Link from "next/link";

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/shop" className="text-zinc-400 hover:text-white transition mb-8 inline-block">
          ← Back to Store
        </Link>

        <h1 className="text-3xl font-bold tracking-tight">Standard Commercial License</h1>
        <p className="mt-4 text-zinc-400 max-w-2xl">
          By purchasing from SilverScentArt, you receive the following rights for all digital assets in your order:
        </p>

        <h2 className="mt-8 text-xl font-semibold">✅ What You Can Do</h2>
        <ul className="mt-2 space-y-1 list-disc pl-5 text-zinc-400">
          <li>Use in monetized YouTube videos, podcasts, Twitch streams, courses, ads, and client projects</li>
          <li>Modify, remix, or incorporate into larger creative works</li>
          <li>Unlimited projects, no attribution required</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">❌ What You Cannot Do</h2>
        <ul className="mt-2 space-y-1 list-disc pl-5 text-zinc-400">
          <li>Resell, redistribute, or sublicense the raw files "as-is"</li>
          <li>Claim the AI-generated elements as your original composition for copyright registration</li>
          <li>Use these assets to train competing AI models</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">⚠️ AI Generation & Copyright Notice</h2>
        <p className="mt-2 text-zinc-400">
          These assets were generated using AI tools (Suno, Midjourney) under a paid commercial license. Under current US Copyright Office guidance, purely AI-generated works are not eligible for copyright protection. For maximum legal protection, we recommend adding significant human creative elements (e.g., re-recorded vocals, live instrumentation, original composition layers). This license is perpetual, non-exclusive, and non-transferable.
        </p>
      </div>
    </div>
  );
}