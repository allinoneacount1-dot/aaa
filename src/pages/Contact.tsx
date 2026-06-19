import { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-28 px-6 sm:px-14">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="w-10 h-px bg-[#0a1b33]/20 mb-5" />
          <h1 className="font-display text-[42px] md:text-[56px] font-medium text-[#0a1b33] tracking-tight">
            Contact Us
          </h1>
          <p className="font-sans text-sm text-slate-500 mt-3 max-w-xl">
            Have a project in mind? Reach out — we build on Solana.
          </p>
        </div>

        <div className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col gap-5">
            <div>
              <label className="font-sans text-xs font-semibold text-slate-500 mb-1.5 block">Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-full pl-9 pr-4 py-2.5 text-sm text-[#0a1b33] placeholder:text-slate-400 focus:outline-none focus:border-slate-300 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-sans text-xs font-semibold text-slate-500 mb-1.5 block">Message</label>
              <div className="relative">
                <MessageSquare size={14} className="absolute left-3 top-3 text-slate-400" />
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-9 pr-4 py-2.5 text-sm text-[#0a1b33] placeholder:text-slate-400 focus:outline-none focus:border-slate-300 transition-colors resize-none"
                />
              </div>
            </div>
            <button
              onClick={() => { if (email && message) { alert('Message sent! We will get back to you shortly.') } }}
              className="bg-[#0a152d] text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2 w-fit"
            >
              <Send size={14} />
              Send message
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200/60 flex items-center justify-center shadow-sm">
            <Mail size={16} className="text-[#0a1b33]" />
          </div>
          <div>
            <div className="font-sans text-xs text-slate-400">Email</div>
            <div className="font-sans text-sm font-medium text-[#0a1b33]">hello@lithos.io</div>
          </div>
        </div>
      </div>
    </div>
  )
}
