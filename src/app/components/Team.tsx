import Image from 'next/image';

export default function Team() {
  const team = [
    { id: 1, name: "Laniyan Abdulqawiyy", nickname: "Cypher", role: "NACOSS President", image: "/team/unilorin-logo.png" },
    { id: 2, name: "Ezekiel Precious", nickname: "Jada", role: "NACOSS Vice President", image: "/team/nacoss-nova-logo.png" },
    { id: 3, name: "Odeniyi Daniel", nickname: "Collins", role: "General Secretary", image: "/team/unilorin-logo.png" },
    { id: 4, name: "Alex Mama", nickname: "Beedrop", role: "Assistant General Secretary", image: "/team/unilorin-logo.png" },
    { id: 5, name: "Saibu Opeyemi", nickname: "Ope", role: "Welfare Secretary", image: "/team/unilorin-logo.png" },
    { id: 6, name: "Bello", nickname: "Engr. Bello", role: "Financial Secretary", image: "/team/nacoss-logo.png" },
    { id: 7, name: "Ibrahim", nickname: "Razz", role: "Social Director I", image: "/team/nacoss-logo.png" },
    { id: 8, name: "Ajibola Hilary", nickname: "Hilary", role: "Social Director II", image: "/team/nacoss-logo.png" },
    { id: 9, name: "Ogunyemi Ayodele", nickname: "Hallelujah", role: "Financial Secretary", image: "/team/nacoss-logo.png" },
    { id: 10, name: "Mojiboye Emmanuel", nickname: "Dynasty", role: "Software Director I", image: "/team/nacoss-nova-logo.png" },
    { id: 11, name: "Alabi Ameer", nickname: "Ameer", role: "Software Director II", image: "/team/unilorin-logo.png" },
    { id: 12, name: "Adeshina Samuel", nickname: "Samuuuu", role: "Sports Secretary", image: "/team/nacoss-logo.png" },
    // { id: 6, name: "Emily Davis", role: "Sponsorships", image: "/team/emily.jpg" }, // No nickname example
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-sm"></span>
            Core Command
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SYSTEM ADMINISTRATORS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            The operators running the mainframe. Meet the team bringing NACOSS TechFest 2.0 to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-[#111] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden bg-[#1a1a1a]">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Techy overlay graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent opacity-90 z-10 group-hover:opacity-70 transition-opacity"></div>
                
                {/* Crosshairs effect on hover */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-500/0 group-hover:border-blue-500/50 transition-colors z-20"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-500/0 group-hover:border-blue-500/50 transition-colors z-20"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-500/0 group-hover:border-blue-500/50 transition-colors z-20"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-500/0 group-hover:border-blue-500/50 transition-colors z-20"></div>
              </div>

              {/* Info Container */}
              <div className="p-4 absolute bottom-0 left-0 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-lg font-bold text-gray-100 leading-tight">
                    {member.name}
                  </h3>
                  
                  {/* Nickname rendering conditionally */}
                  {member.nickname && (
                    <span className="text-cyan-500/90 text-sm font-mono">
                      @{member.nickname}
                    </span>
                  )}
                </div>
                
                <p className="text-blue-400 text-xs font-mono uppercase tracking-wider mt-2 drop-shadow-md">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}