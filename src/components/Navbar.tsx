import { useLocation, useNavigate } from 'react-router-dom'
import WalletButton from './WalletButton'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Docs', path: '/docs' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  if (isHome) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/40">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0a152d] rounded-full flex items-center justify-center text-white text-xs">
            ✦
          </div>
          <span className="font-display text-base font-medium text-[#0a1b33]">Epoch</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = location.pathname === link.path
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  active ? 'bg-[#0a152d] text-white' : 'text-slate-500 hover:text-[#0a1b33]'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        <WalletButton />
      </div>
    </nav>
  )
}
