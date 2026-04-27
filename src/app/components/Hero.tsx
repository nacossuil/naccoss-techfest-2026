import Link from "next/link";
import ScrollReveal from './ScrollReveal';
import { Cpu, MonitorSmartphone, Hexagon } from 'lucide-react';

export default function Hero() {
    return (
        <section className="pt-22 pb-16 px-6 relative overflow-hidden bg-transparent">


            {/* Huge Tech Icons Background */}
            <div className="absolute top-1/4 left-10 opacity-10 animate-pulse hidden md:block"><Cpu size={160} className="text-[#8cfe63]" /></div>
            <div className="absolute top-1/3 right-10 opacity-10 animate-bounce"><MonitorSmartphone size={180} className="text-[#8cfe63]" /></div>
            <div className="absolute bottom-1/4 left-1/4 opacity-10"><Hexagon size={140} className="text-[#8cfe63] animate-[spin_10s_linear_infinite]" /></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-20 relative z-10">
                <ScrollReveal delay={0.1}>

                    <div className="inline-block py-1 px-3 rounded-full bg-[#8cfe63]/10 border border-[#8cfe63]/20 text-[#8cfe63] text-sm font-semibold mb-6 tracking-wide">
                        NACOSS TechFest '26
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 hover-glitch transition-all duration-300">
                        <span className="block text-gray-100 mb-2">The Other Side</span>
                        <span className="block text-[#8cfe63] drop-shadow-[0_0_15px_rgba(124,248,59,0.5)]">
                            Of Tech
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>

                    <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        Step out of the syntax and into the shadows of innovation.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#8cfe63] text-black font-bold py-4 px-8 rounded-full hover:bg-[#68d132] transition-colors text-lg cursor-pointer hover-glitch">
                            ANTICIPATE!
                        </button>
                        <Link href="#agenda" className="bg-transparent border-2 border-[#8cfe63] text-[#8cfe63] font-bold py-4 px-8 rounded-full hover:bg-[#8cfe63]/10 transition-colors text-lg text-center hover-glitch">
                            Explore Agenda
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Event Details Banner */}
                <ScrollReveal delay={0.7}>

                    <div className="mt-17 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 px-12 bg-transparent border border-[#8cfe63]/30 rounded-3xl w-full max-w-4xl shadow-[0_0_30px_rgba(124,248,59,0.1)] relative overflow-hidden group">
                        {/* Radar sweep effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8cfe63]/10 to-transparent -translate-x-[150%] group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"></div>

                        <div className="text-center md:text-left z-10">
                            <p className="text-gray-400 text-center text-sm uppercase tracking-widest mb-1">Date</p>
                            <p className="text-xl font-bold text-gray-100">April, 2026</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10"></div>
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-center text-sm uppercase tracking-widest mb-1">Time</p>
                            <p className="text-xl font-bold text-gray-100">09:00 AM</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10"></div>
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-center text-sm uppercase tracking-widest mb-1">Location</p>
                            <p className="text-xl text-center font-bold text-gray-100">Multipurpose Hall (Unilorin)</p>
                        </div>


                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}