import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent/80 backdrop-blur-md border-b border-[#8cfe63]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Updated Logo Section */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity hover-glitch">
          {/* Logo 1 */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/unilorin-logo.png" // Replace with your actual path in the public folder
              alt="Unilorin Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-px h-6 bg-white/20 hidden sm:block"></div>

          {/* Logo 2 */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/ncs.png" // Replace with your actual path in the public folder
              alt="NACOSS Logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-px h-6 bg-white/20 hidden sm:block"></div>

          {/* Logo 3 */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/ncss.png" // Replace with your actual path in the public folder
              alt="TechFest Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#about" className="hover:text-[#8cfe63] transition-colors">About</Link>
          <Link href="#speakers" className="hover:text-[#8cfe63] transition-colors">Speakers</Link>
          <Link href="#team" className="hover:text-[#8cfe63] transition-colors">Team</Link>
          <Link href="#faqs" className="hover:text-[#8cfe63] transition-colors">FAQs</Link>
        </div>

        {/* CTA Button */}
        <button className="bg-[#8cfe63] text-black font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(124,248,59,0.5)] cursor-pointer">
          Get Ticket
        </button>
      </div>
    </nav>
  );
}