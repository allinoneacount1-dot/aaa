import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4'

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display text-[42px] md:text-[56px] font-medium tracking-tight leading-[1.1]"
            style={{ color: '#0a1b33' }}
            dangerouslySetInnerHTML={{ __html: 'Foundation of the<br />new digital epoch' }}
          />
          <p
            className="font-sans text-[14px] md:text-[15px] mt-4 max-w-[520px] leading-relaxed"
            style={{ color: '#64748b' }}
          >
            Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 bg-[#0a152d] text-white text-sm font-semibold px-7 py-3 rounded-full"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Bottom Navbar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
        >
          {/* Logo */}
          <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-sm mr-1">
            ✦
          </div>

          {/* Nav Links */}
          <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-4 py-2 transition-colors">
            Products
          </button>
          <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-4 py-2 transition-colors">
            Docs
          </button>

          {/* CTA */}
          <button className="flex items-center gap-1.5 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all ml-1">
            Get in touch
            <ChevronRight size={14} />
          </button>
        </motion.nav>
      </div>
    </section>
  )
}
