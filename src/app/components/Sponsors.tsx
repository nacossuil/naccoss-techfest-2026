export default function Sponsors() {
  // Placeholder array. When you get actual sponsors, replace these with image paths.
//   const sponsors = [
//     "Kuda", "SchoolTry", "MyCrib", "Studio Duo", "GitHub", "Vercel", "Figma", "Paystack"
//   ];
  const sponsors = [
    "To Be Announced!", "To Be Announced!", "To Be Announced!", "To Be Announced!"
  ];

  return (
    <section className="py-16 bg-[#050505] border-y border-white/5 overflow-hidden relative">
      {/* Left and Right Fade Overlays for a smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-20">
        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
          {/* Backed by industry leaders */} Our Sponsors
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused] transition-all">
        {/* We map the array twice to create the seamless infinite loop */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div 
            key={index} 
            className="w-1/2 md:w-1/4 flex items-center justify-center shrink-0 px-8"
          >
            {/* Replace this div with actual <Image /> tags later. 
              The grayscale filter keeps it fitting the dark theme until hovered.
            */}
            <div className="text-2xl md:text-3xl font-bold text-gray-600 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer font-mono select-none">
              {sponsor}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}