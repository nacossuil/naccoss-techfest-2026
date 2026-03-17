// Actual Code for the Speakers Section
// const speakers = [
//   {
//     id: 1,
//     name: "Musty Mustapha",
//     role: "Managing Director",
//     company: "Kuda Microfinance Bank",
//     tag: "Keynote Speaker",
//     image: "/api/placeholder/400/400",
//   },
//   {
//     id: 2,
//     name: "Dr. Amos Bajeh",
//     role: "Sub-Dean, Faculty of CIS",
//     company: "University of Ilorin",
//     tag: "Keynote Speaker",
//     image: "/api/placeholder/400/400",
//   },
//   {
//     id: 3,
//     name: "Hakeem Olasupo",
//     role: "Founder",
//     company: "Studio Duo",
//     tag: "Speaker",
//     image: "/api/placeholder/400/400",
//   },
//   {
//     id: 4,
//     name: "Ismail Eleburuike",
//     role: "Founder & CEO",
//     company: "SchoolTry",
//     tag: "Speaker",
//     image: "/api/placeholder/400/400",
//   },
//   {
//     id: 5,
//     name: "Shittu Samson",
//     role: "Founder/CEO",
//     company: "MyCrib",
//     tag: "Speaker",
//     image: "/api/placeholder/400/400",
//   }
// ];

// export default function Speakers() {
//   return (
//     <section id="speakers" className="py-24 px-6 bg-[#050505]">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col items-center text-center mb-16">
//           <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
//             Speakers
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             OUR ALL-STARS
//           </h2>
//           <p className="text-gray-400 max-w-2xl text-lg">
//             NacossTechfest 2026 contains a wide range of industry-experts ready to drop value bombs.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {speakers.map((speaker) => (
//             <div 
//               key={speaker.id} 
//               className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500"
//             >
//               {/* Image Container */}
//               <div className="aspect-square bg-[#1a1a1a] relative overflow-hidden">
//                 <img 
//                   src={speaker.image} 
//                   alt={speaker.name}
//                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full text-cyan-400">
//                     {speaker.tag}
//                   </span>
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-100 mb-1">{speaker.name}</h3>
//                 <p className="text-gray-400 text-sm">
//                   {speaker.role}, <span className="text-white">{speaker.company}</span>
//                 </p>
                
//                 {/* Social Links placeholder */}
//                 <div className="flex gap-4 mt-6">
//                   <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center cursor-pointer transition-colors border border-white/10 hover:border-cyan-500/50">
//                     <span className="text-xs">𝕏</span>
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center cursor-pointer transition-colors border border-white/10 hover:border-cyan-500/50">
//                     <span className="text-xs">in</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// Current Speakers Section: Anticipating:

export default function Speakers() {
  // Creating an array of 3 placeholders for the grid
  const placeholders = [1, 2, 3];

  return (
    <section id="speakers" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Encrypted Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            THE ARCHITECTS
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We are curating a lineup of industry disruptors. The identities of our speakers are currently classified. Stay tuned for the decryption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((item) => (
            <div 
              key={item} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image/Avatar Placeholder Container */}
              <div className="aspect-square bg-gradient-to-br from-[#111] to-[#050505] relative overflow-hidden flex items-center justify-center">
                {/* Background grid pattern simulation */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Glowing Lock Graphic */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-cyan-500/20 animate-ping opacity-75"></div>
                  <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-cyan-500/30 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-500">
                    <svg className="w-8 h-8 text-cyan-500/50 group-hover:text-cyan-400 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <h3 className="text-xl font-bold text-gray-500 mb-4 font-mono">
                  IDENTITY CLASSIFIED
                </h3>
                
                {/* Simulated loading bars replacing the role/company text */}
                <div className="space-y-3 mt-4">
                  <div className="h-3 w-full bg-white/5 rounded animate-pulse"></div>
                  <div className="h-3 w-2/3 bg-white/5 rounded animate-pulse delay-75"></div>
                </div>
                
                {/* Footer of the card */}
                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                   <span className="text-xs font-mono text-cyan-500/60 animate-pulse">STATUS: DECRYPTING...</span>
                   <span className="text-xs font-mono text-gray-600">██████ 34%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}