import { useState, useEffect, useCallback } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { Wallet, X, Copy, Check, LogOut, ExternalLink } from 'lucide-react'

const wallets = [
  { id: 'phantom', name: 'Phantom', adapter: 'Phantom' as const },
  { id: 'solflare', name: 'Solflare', adapter: 'Solflare' as const },
  { id: 'backpack', name: 'Backpack', adapter: 'Backpack' as const },
]

export default function WalletButton() {
  const { publicKey, connected, wallets: availableWallets, select, disconnect } = useWallet()
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  const handleSelect = useCallback((name: string) => {
    const w = availableWallets.find(w => w.adapter.name === name)
    if (w) select(w.adapter.name)
    setOpen(false)
  }, [availableWallets, select])

  const copyAddress = useCallback(() => {
    if (!publicKey) return
    navigator.clipboard.writeText(publicKey.toBase58())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [publicKey])

  if (connected && publicKey) {
    const addr = publicKey.toBase58()
    const short = `${addr.slice(0, 4)}...${addr.slice(-4)}`
    return (
      <div className="flex items-center gap-2 bg-white border border-slate-200/60 shadow-sm rounded-full pl-3 pr-1 py-1">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-[#0a1b33]">{short}</span>
        <span className="text-[10px] font-medium text-[#0a152d]/50 bg-slate-100 px-1.5 py-0.5 rounded">SOL</span>
        <button onClick={copyAddress} className="p-1.5 text-slate-400 hover:text-[#0a1b33] transition-colors" title="Copy address">
          {copied ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
        </button>
        <a
          href={`https://solscan.io/account/${addr}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-slate-400 hover:text-[#0a1b33] transition-colors"
          title="View on Solscan"
        >
          <ExternalLink size={13} />
        </a>
        <button onClick={disconnect} className="p-1.5 text-slate-400 hover:text-red-500 transition-colors" title="Disconnect">
          <LogOut size={13} />
        </button>
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#0a152d] text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-all"
      >
        <Wallet size={14} />
        Connect Wallet
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl border border-slate-200/60">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Wallet size={18} className="text-[#0a1b33]" />
                <span className="font-display text-lg font-medium text-[#0a1b33]">Connect Wallet</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-[#0a1b33] transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {wallets.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handleSelect(w.adapter)}
                  className="flex items-center gap-4 w-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl px-4 py-3.5 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#0a1b33]/5 flex items-center justify-center text-xs font-bold text-[#0a1b33]">
                    {w.name[0]}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[#0a1b33]">{w.name}</div>
                    <div className="text-xs text-slate-400">Connect to your {w.name} wallet</div>
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              By connecting, you agree to our Terms of Service.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
