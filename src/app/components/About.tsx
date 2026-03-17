export default function About() {
    const stats = [
        { label: "ATTENDEES", value: "1,000+" },
        { label: "SPEAKERS", value: "10+" },
        { label: "SESSIONS", value: "8" },
        { label: "HOURS OF VALUE", value: "12" },
    ];

    return (
        <section id="about" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Column: The Manifesto */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-cyan-500/50"></span>
                            About The Event
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            THE OTHER SIDE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
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

                            <p className="pl-4 border-l-2 border-purple-500/50 italic text-gray-300">
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
                                    className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute -inset-px bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                                    <div className="relative z-10 flex flex-col items-start">
                                        <span className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 font-mono group-hover:text-white transition-colors">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs font-mono text-cyan-500/80 tracking-widest uppercase">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Warning Banner */}
                        <div className="mt-6 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 flex items-start gap-4">
                            <svg className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="text-purple-300 font-semibold text-sm mb-1">Capacity Limit Warning</h4>
                                <p className="text-gray-400 text-sm">Venue infrastructure supports a maximum of 1,000 nodes (attendees). Registration will close automatically upon reaching critical mass.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}