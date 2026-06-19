import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import MarqueeScroller from '../components/MarqueeScroller'

export default function Home() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#f9fafb] flex flex-col items-center px-4 py-8 md:py-12">
      <HeroSection />
      <MarqueeScroller />

      <div className="mt-16 text-center max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-medium text-[#0a1b33] mb-4">
          Build on the new digital epoch
        </h2>
        <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
          From infrastructure to applications — we provide the tools, protocols, and expertise to build decentralized ecosystems on Solana.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/products')}
            className="bg-[#0a152d] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all"
          >
            Explore Products
          </button>
          <button
            onClick={() => navigate('/docs')}
            className="bg-white text-[#0a152d] text-sm font-semibold px-6 py-2.5 rounded-full border border-slate-200/60 hover:border-slate-300 transition-all"
          >
            Read Docs
          </button>
        </div>
      </div>
    </main>
  )
}
