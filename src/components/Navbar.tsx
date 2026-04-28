"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-center">
      {/* Brand Banner - Matches Page Background */}
      <div className="w-full bg-indigo-luxury py-12 flex flex-col items-center border-b border-gold/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gold/5 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full px-4 text-center"
        >
          {/* Logo at the very top */}
          <div className="w-full max-w-[800px] mb-6">
            <Image 
              src="/logo-no-bg.svg" 
              alt="True Orbit Logo" 
              width={800} 
              height={200} 
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              priority
            />
          </div>

          {/* Company Name - Full Width */}
          <h1 className="w-full text-[clamp(2rem,8vw,10rem)] font-black gold-gradient leading-[0.8] tracking-tighter uppercase mb-6">
            True Orbit Bookkeeping
          </h1>

          {/* Tagline - Elite Financial Management */}
          <div className="flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-gold text-[clamp(0.7rem,2vw,1.2rem)] font-black tracking-[0.5em] uppercase shadow-2xl mb-8">
            Elite Financial Management
          </div>
        </motion.div>
      </div>
      
      {/* Navigation Bar - Sticky for usability */}
      <nav className="w-full py-6 px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-bold tracking-widest uppercase bg-indigo-900/60 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50 shadow-lg">
        {["Services", "Pricing", "About", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-white/60 hover:text-gold transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <a 
          href="tel:5033139953" 
          className="flex items-center gap-3 text-gold hover:text-gold-light transition-all bg-gold/10 px-6 py-2.5 rounded-full border border-gold/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        >
          <Phone size={14} />
          (503) 313-9953
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
