import { Users, Mic, Calendar, Clock, Binary } from "lucide-react";

export default function About() {
    const stats = [
        { label: "ATTENDEES", value: "1,000+", icon: <Users size={32} className="text-[#8cfe63]" /> },
        { label: "SPEAKERS", value: "10+", icon: <Mic size={32} className="text-[#8cfe63]" /> },
        { label: "SESSIONS", value: "8", icon: <Calendar size={32} className="text-[#8cfe63]" /> },
        { label: "HOURS OF VALUE", value: "12", icon: <Clock size={32} className="text-[#8cfe63]" /> },
    ];

    return (
        <section id="about" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Background Huge Icon */}
            <div className="absolute -right-20 top-20 opacity-5 pointer-events-none">
                <Binary size={400} className="text-[#8cfe63]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: The Manifesto */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-[#8cfe63] font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-[#8cfe63]"></span>
                            About The Event
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            THE OTHER SIDE <br />
                            <span className="text-[#8cfe63] drop-shadow-[0_0_10px_rgba(124,248,59,0.5)]">
                                OF TECH
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                NACOSS TechFest 2.0 is a journey beyond what you see on the surface. Beyond clean syntax, polished UIs, and deployed applications lies a deeper layer of technology — one that truly drives innovation.
                            </p>

                            <p>
                                Here, we explore the unseen: the decisions behind great products, the systems that scale silently, and the ideas that turn ordinary code into powerful experiences.
                            </p>

                            <p>
                                This is where developers evolve into thinkers, builders become innovators, and technology is understood not just as code — but as influence, impact, and architecture.
                            </p>

                            <p className="pl-4 border-l-2 border-[#8cfe63] italic text-gray-300">
                                "Step out of the syntax and into the shadows of innovation."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: The Stats Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-transparent border border-[#8cfe63]/20 p-8 rounded-2xl hover:border-[#8cfe63] transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="relative z-10 flex flex-col items-start">
                                        <div className="mb-4">{stat.icon}</div>
                                        <span className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 font-mono group-hover:text-white transition-colors">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs font-mono text-[#8cfe63]/80 tracking-widest uppercase">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Warning Banner */}
                        <div className="mt-6 bg-[#8cfe63]/5 border border-[#8cfe63]/20 rounded-xl p-4 flex items-start gap-4">
                            <svg className="w-6 h-6 text-[#8cfe63] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="text-[#8cfe63] font-semibold text-sm mb-1">Capacity Limit Warning</h4>
                                <p className="text-gray-400 text-sm">Venue infrastructure supports a maximum of 1,000 nodes (attendees). Registration will close automatically upon reaching critical mass.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}