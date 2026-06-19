import { useId } from 'react'

const logos = [
  { src: 'https://svgl.app/library/procure.svg', alt: 'Procure', gradient: ['#3b82f6', '#2563eb'] },
  { src: 'https://svgl.app/library/shopify.svg', alt: 'Shopify', gradient: ['#f59e0b', '#d97706'] },
  { src: 'https://svgl.app/library/blender.svg', alt: 'Blender', gradient: ['#3b82f6', '#1d4ed8'] },
  { src: 'https://svgl.app/library/figma.svg', alt: 'Figma', gradient: ['#a855f7', '#7c3aed'] },
  { src: 'https://svgl.app/library/spotify.svg', alt: 'Spotify', gradient: ['#ec4899', '#db2777'] },
  { src: 'https://svgl.app/library/lottielab.svg', alt: 'Lottielab', gradient: ['#eab308', '#65a30d'] },
  { src: 'https://svgl.app/library/google-cloud.svg', alt: 'Google Cloud', gradient: ['#60a5fa', '#3b82f6'] },
  { src: 'https://svgl.app/library/bing.svg', alt: 'Bing', gradient: ['#06b6d4', '#0891b2'] },
]

export default function MarqueeScroller() {
  const id = useId()

  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto relative overflow-hidden">
      {/* Masking gradient edges */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
        }}
      />

      <div
        className="flex gap-4 marquee-track"
        style={{
          animation: 'marquee 40s linear infinite',
          width: 'fit-content',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running' }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${id}-${i}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-300"
              style={{
                background: `radial-gradient(circle at center, ${logo.gradient[0]}30 0%, ${logo.gradient[1]}15 60%, transparent 80%)`,
              }}
            />
            <img
              src={logo.src}
              alt={logo.alt}
              className="relative z-[1] h-8 max-w-[70%] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
