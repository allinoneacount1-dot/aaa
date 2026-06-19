import HeroSection from './components/HeroSection'
import MarqueeScroller from './components/MarqueeScroller'

export default function App() {
  return (
    <main className="min-h-screen bg-[#f9fafb] flex flex-col items-center px-4 py-8 md:py-12">
      <HeroSection />
      <MarqueeScroller />
    </main>
  )
}
