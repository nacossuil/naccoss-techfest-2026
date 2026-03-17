import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Speakers />
        <Sponsors />
        <Agenda />
      </main>
    </div>
  );
}
