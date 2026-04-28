"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col items-center pt-8 pb-6 px-8 fixed top-0 z-50 bg-indigo-luxury/60 backdrop-blur-xl border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 mb-6"
      >
        <Image 
          src="/logo-no-bg.svg" 
          alt="True Orbit Logo" 
          width={100} 
          height={100} 
          className="drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
        />
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-black gold-gradient tracking-tighter block uppercase leading-none">
            True Orbit
          </span>
          <span className="text-lg md:text-xl font-medium text-white/80 tracking-[0.3em] uppercase ml-1">
            Bookkeeping
          </span>
        </div>
      </motion.div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm font-bold tracking-widest uppercase">
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
          className="flex items-center gap-2 text-gold hover:text-gold-light transition-all bg-white/5 px-4 py-2 rounded-full border border-gold/20"
        >
          <Phone size={14} />
          (503) 313-9953
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
