import { useNavigate } from 'react-router-dom'
import { Shield, Cpu, Globe, Database } from 'lucide-react'

const products = [
  { title: 'Solana RPC Layer', desc: 'High-availability RPC infrastructure with Geyser plugin support, custom programs, and sub-ms latency for enterprise workloads.', icon: Database },
  { title: 'AI Agent Framework', desc: 'Deploy autonomous agents on Solana — on-chain inference, MEV strategies, and cross-protocol arbitrage bots.', icon: Cpu },
  { title: 'Cross-Chain Bridge', desc: 'Trustless bridge infrastructure connecting Solana to Ethereum, Bitcoin, and L2 rollups via ZK light clients.', icon: Globe },
  { title: 'Validator Suite', desc: 'Enterprise validator operations toolkit — monitoring, staking, MEV optimization, and SLA-guaranteed infrastructure.', icon: Shield },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-28 px-6 sm:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="w-10 h-px bg-[#0a1b33]/20 mb-5" />
          <h1 className="font-display text-[42px] md:text-[56px] font-medium text-[#0a1b33] tracking-tight">
            Products
          </h1>
          <p className="font-sans text-sm text-slate-500 mt-3 max-w-xl">
            Infrastructure, tools, and protocols for the Solana ecosystem — built for enterprises, builders, and communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-slate-300 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0a1b33]/5 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#0a1b33]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#0a1b33] mb-2">{p.title}</h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        <button
          onClick={() => navigate('/contact')}
          className="bg-[#0a152d] text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-all"
        >
          Get in touch →
        </button>
      </div>
    </div>
  )
}
