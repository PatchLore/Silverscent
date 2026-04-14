import { Button } from "@/components/ui/button";

export const dynamic = 'force-dynamic';

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">Custom Music Production</h1>
          <p className="text-2xl text-zinc-400">
            Request custom tracks, remixes or sound design for your project.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Your Name</label>
            <input 
              type="text" 
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Project Description</label>
            <textarea 
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition min-h-[120px] resize-none"
              placeholder="Describe what you need: genre, length, references, purpose..."
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Budget Range</label>
            <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition">
              <option value="">Select budget range</option>
              <option value="50-100">£50 - £100</option>
              <option value="100-250">£100 - £250</option>
              <option value="250-500">£250 - £500</option>
              <option value="500+">£500+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Reference Files (Optional)</label>
            <div className="border-2 border-dashed border-zinc-700 rounded-xl p-6 text-center hover:border-pink-500 transition cursor-pointer">
              <p className="text-zinc-400">Click or drag files here to upload</p>
              <p className="text-xs text-zinc-500 mt-1">MP3, WAV, PDF, images up to 20MB</p>
            </div>
          </div>

          <Button size="lg" className="w-full text-lg py-6 mt-4">
            Submit Request
          </Button>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          I'll reply within 24 hours with a custom quote and timeline.
        </p>
      </div>
    </div>
  );
}
