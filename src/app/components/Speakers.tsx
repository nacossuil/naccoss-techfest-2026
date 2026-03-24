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

import ScrollReveal from "./ScrollReveal";

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

import { User, Lock, Key } from "lucide-react";

export default function Speakers() {
    // Creating an array of 3 placeholders for the grid
    const placeholders = [1, 2, 3];

    return (
        <section id="speakers" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Huge Tech Icon Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Key size={500} className="text-[#8cfe63]" />
            </div>
            <ScrollReveal delay={0.3}>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-[#8cfe63] font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#8cfe63] animate-pulse"></span>
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
                                className="group relative bg-transparent border-2 border-[#8cfe63]/20 rounded-2xl overflow-hidden hover:border-[#8cfe63] transition-all duration-500"
                            >
                                {/* Image/Avatar Placeholder Container */}
                                <div className="aspect-square bg-transparent relative overflow-hidden flex items-center justify-center">

                                    {/* Glowing Lock Graphic */}
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute w-32 h-32 rounded-full bg-[#8cfe63]/10 animate-ping opacity-75"></div>
                                        <div className="w-32 h-32 rounded-full bg-transparent border-2 border-[#8cfe63] flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(124,248,59,0.3)] group-hover:shadow-[0_0_50px_rgba(124,248,59,0.6)] transition-all duration-500">
                                            <Lock size={48} className="text-[#8cfe63] group-hover:text-white transition-colors duration-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 relative">
                                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                    <h3 className="text-xl font-bold text-[#8cfe63] mb-4 font-mono">
                                        IDENTITY CLASSIFIED
                                    </h3>

                                    {/* Simulated loading bars replacing the role/company text */}
                                    <div className="space-y-3 mt-4">
                                        <div className="h-3 w-full bg-[#8cfe63]/20 rounded animate-pulse"></div>
                                        <div className="h-3 w-2/3 bg-[#8cfe63]/10 rounded animate-pulse delay-75"></div>
                                    </div>

                                    {/* Footer of the card */}
                                    <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-xs font-mono text-[#8cfe63] animate-pulse">STATUS: DECRYPTING...</span>
                                        <span className="text-xs font-mono text-gray-600">██████ 34%</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}