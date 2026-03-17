import Link from "next/link";
import ScrollReveal from './ScrollReveal';

export default function Hero() {
    return (
        <section className="pt-22 pb-16 px-6 relative overflow-hidden">


            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-20 relative z-10">
                <ScrollReveal delay={0.1}>

                    <div className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-semibold mb-6 tracking-wide">
                        NACOSS TechFest 2.0
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="block text-gray-100">The Other Side</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
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
                        <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors text-lg cursor-pointer">
                            Register for Free
                        </button>
                        <Link href="#agenda" className="bg-transparent border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/5 transition-colors text-lg text-center">
                            Explore Agenda
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Event Details Banner */}
                <ScrollReveal delay={0.7}>

                    <div className="mt-17 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8 px-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm w-full max-w-4xl">
                        <div className="text-center md:text-left">
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
                            <p className="text-xl text-center font-bold text-gray-100">To be Announced Very soon</p>
                        </div>


                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}