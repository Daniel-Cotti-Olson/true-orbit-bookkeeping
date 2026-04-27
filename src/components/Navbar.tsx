"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center fixed top-0 z-50 bg-luxury-black/60 backdrop-blur-xl border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <Image src="/logo.png" alt="True Orbit Logo" width={40} height={40} className="rounded-full border border-gold/20" />
        <span className="text-xl font-bold gold-gradient tracking-tight">True Orbit</span>
      </motion.div>
      
      <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
        {["Services", "Pricing", "About", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-gray-400 hover:text-gold transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="gold-border px-7 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
      >
        Client Login
      </motion.button>
    </nav>
  );
};

export default Navbar;
