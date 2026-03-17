import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[100px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter">
                TECHFEST 2.0
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Exploring the unseen forces, bold designs, and critical systems shaping tomorrow's digital frontier.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/80">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              SYSTEM ONLINE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">NAVIGATION</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-cyan-400 transition-colors">About the Event</Link></li>
              <li><Link href="#agenda" className="hover:text-cyan-400 transition-colors">Event Protocol (Agenda)</Link></li>
              <li><Link href="#speakers" className="hover:text-cyan-400 transition-colors">The Architects (Speakers)</Link></li>
              <li><Link href="#team" className="hover:text-cyan-400 transition-colors">Core Command (Team)</Link></li>
              <li><Link href="#faqs" className="hover:text-cyan-400 transition-colors">Query Database (FAQs)</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">COMMUNICATIONS</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-cyan-500 font-mono text-xs">EMAIL</span>
                <a href="mailto:nacossuil@gmail.com" className="hover:text-white transition-colors">nacossuil@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-500 font-mono text-xs">X (TWITTER)</span>
                <a href="#" className="hover:text-white transition-colors">@nacoss_unilorin</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyan-500 font-mono text-xs">INSTAGRAM</span>
                <a href="#" className="hover:text-white transition-colors">@nacoss.unilorin</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Warning */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">ACCESS CODE</h4>
            <p className="text-sm text-gray-400 mb-4">
              Don't miss the decryption. Get notified when tickets drop and new speakers are declassified.
            </p>
            <form className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button 
                type="button"
                className="bg-white/10 hover:bg-cyan-500/20 text-white p-2.5 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-mono">
            &copy; {currentYear} NACOSS UNILORIN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs font-mono text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}