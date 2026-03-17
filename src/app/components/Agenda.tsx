export default function Agenda() {
  const schedule = [
    {
      id: 1,
      time: "09:00 AM",
      title: "SYSTEM INITIALIZATION",
      description: "Registration, networking, and onboarding. Get your badges and settle in.",
      status: "UNLOCKED",
    },
    {
      id: 2,
      time: "10:00 AM",
      title: "KEYNOTE: THE OTHER SIDE OF TECH",
      description: "Opening address exploring the unseen forces shaping the future of digital products.",
      status: "DECRYPTING SPEAKER...",
    },
    {
      id: 3,
      time: "11:30 AM",
      title: "PANEL: BEYOND THE SYNTAX",
      description: "A deep dive into product management, UI/UX design, and the psychology of users.",
      status: "DECRYPTING PANELISTS...",
    },
    {
      id: 4,
      time: "01:00 PM",
      title: "DOWNTIME // RECHARGE",
      description: "Lunch break, interactive VR sessions, and sponsor booth exploration.",
      status: "UNLOCKED",
    },
    {
      id: 5,
      time: "02:00 PM",
      title: "MASTERCLASS: CYBER DEFENSE",
      description: "Live demonstration of modern security threats and how to architect impenetrable systems.",
      status: "DECRYPTING SPEAKER...",
    },
    {
      id: 6,
      time: "04:00 PM",
      title: "SYSTEM SHUTDOWN & AWARDS",
      description: "Closing remarks, NACOSS award presentations, and final networking.",
      status: "UNLOCKED",
    }
  ];

  return (
    <section id="agenda" className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Techfest Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EVENT PROTOCOL
          </h2>
          <p className="text-gray-400 text-lg">
            The master schedule for TechFest 2.0. Sequence subject to optimization.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          
          {schedule.map((item, index) => (
            <div key={item.id} className="mb-12 relative pl-8 md:pl-0">
              
              {/* Glowing Timeline Node */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>
              
              {/* Desktop Centered Line Alignment */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-48px] w-px bg-white/10 -translate-x-1/2"></div>

              {/* Content Card Layout */}
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-[45%]"></div>
                
                {/* Actual Card */}
                <div className="w-full md:w-[45%] bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300 relative group">
                  
                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                  <div className="flex flex-col gap-2 relative z-10">
                    <span className="text-cyan-400 font-mono text-sm border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">
                      {item.time}
                    </span>
                    <h3 className="text-xl font-bold text-gray-100 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Status Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <span className={`text-xs font-mono flex items-center gap-2 ${
                        item.status === 'UNLOCKED' ? 'text-gray-500' : 'text-purple-400 animate-pulse'
                      }`}>
                        {item.status === 'UNLOCKED' ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        )}
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}