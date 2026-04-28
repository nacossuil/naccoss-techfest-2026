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

export default function Speakers() {
    // List of speaker image files and names (from public/speakers)
    const speakerFiles = [
        "Akande Olalekan Toheeb.png",
        "Awodi Abdulmujeeb Ayomide.png",
        "Fatia Shodipe.png",
        "Imam Abubakar.png",
        "Okanlawon Yusrah Modupe.png",
        "Qazeem Oladejo.png",
    ];

    // Helper to format filename to display name (remove extension)
    const getSpeakerName = (filename: string) => filename.replace(/\.png$/i, "");

    return (
        <section id="speakers" className="py-24 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
                        Speakers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        OUR ALL-STARS
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        NacossTechfest 2026 features a lineup of inspiring speakers.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakerFiles.map((file, idx) => (
                        <div
                            key={file}
                            className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500"
                        >
                            {/* Image Container */}
                            <div className="aspect-square bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
                                <img
                                    src={`/speakers/${file}`}
                                    alt={getSpeakerName(file)}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            {/* Text Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-100 mb-1">{getSpeakerName(file)}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}