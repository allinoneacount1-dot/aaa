import { BookOpen, FileText, Code, BookMarked } from 'lucide-react'

const sections = [
  { title: 'Quick Start', desc: 'Get up and running with our Solana tools in under 5 minutes.', icon: BookOpen, articles: '6' },
  { title: 'API Reference', desc: 'Complete documentation for all endpoints, methods, and parameters.', icon: FileText, articles: '24' },
  { title: 'SDK & Libraries', desc: 'TypeScript, Python, and Rust SDKs for integrating with our infrastructure.', icon: Code, articles: '18' },
  { title: 'Guides & Tutorials', desc: 'Step-by-step walkthroughs for common integration patterns.', icon: BookMarked, articles: '12' },
]

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#f9fafb] pt-28 px-6 sm:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="w-10 h-px bg-[#0a1b33]/20 mb-5" />
          <h1 className="font-display text-[42px] md:text-[56px] font-medium text-[#0a1b33] tracking-tight">
            Documentation
          </h1>
          <p className="font-sans text-sm text-slate-500 mt-3 max-w-xl">
            Everything you need to build on our Solana infrastructure — from quick start guides to full API references.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {sections.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1b33]/5 flex items-center justify-center">
                    <Icon size={18} className="text-[#0a1b33]" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{s.articles} articles</span>
                </div>
                <h3 className="font-display text-lg font-medium text-[#0a1b33] mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
