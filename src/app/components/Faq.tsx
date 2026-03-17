'use client';

import { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to know how to code to attend?",
      answer: "Not at all! The theme 'The Other Side of Tech' is specifically tailored to showcase product management, UI/UX design, cybersecurity, and tech marketing. There is a place for everyone."
    },
    {
      question: "Is the event entirely free?",
      answer: "Yes, access to NACOSS TechFest 2.0 is 100% free for Unilorin students, but registration is strictly required as venue capacity is limited to 1,000 nodes."
    },
    {
      question: "Will there be food and swags?",
      answer: "Absolutely. We have partnered with top tech brands to provide exclusive swags, and there will be a dedicated recharge window (lunch break) for all verified attendees."
    },
    {
      question: "Can I volunteer to join the organizing team?",
      answer: "Volunteer applications are currently closed for the core team, but we will open flash-roles for ushers and media handlers closer to the event date. Keep an eye on our X (Twitter) handle."
    },
    {
      question: "Will I get a certificate of attendance?",
      answer: "Yes, verified attendees who check in at the venue will receive a digitally verifiable certificate of participation sent to their registered emails."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 px-6 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Query Database
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FREQUENTLY ASKED
          </h2>
          <p className="text-gray-400 text-lg">
            Extracting answers from the mainframe.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index}
                className={`bg-[#0a0a0a] border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isActive ? 'border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold pr-8 transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-gray-200'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 rotate-180' : 'border-white/10 text-gray-400 bg-white/5'
                  }`}>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                
                {/* Smooth Expansion Wrapper */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}