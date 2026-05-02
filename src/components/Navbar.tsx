"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-50">
      {/* Brand Banner - Solid Horizontal Bar, Sticky */}
      <div className="w-full bg-indigo-luxury flex flex-col items-center border-b border-gold/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gold/5 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full px-4 text-center relative z-10 py-6"
        >
          {/* Logo - Standardized within the horizontal bar */}
          <div className="w-full max-w-[800px] mb-4">
            <Image 
              src="/logo-no-bg.svg" 
              alt="True Orbit Logo" 
              width={1200} 
              height={200} 
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              priority
            />
          </div>

          {/* Tagline - Compact for sticky bar */}
          <div className="text-gold text-[clamp(0.6rem,1.5vw,0.9rem)] font-black tracking-[0.4em] uppercase opacity-80">
            Elite Financial Management
          </div>
        </motion.div>
      </div>
      
      {/* Navigation Bar - Integrated into the sticky header structure */}
      <nav className="w-full py-4 px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-xs font-bold tracking-widest uppercase bg-indigo-950/90 backdrop-blur-xl border-b border-white/5 shadow-lg">
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
