"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const navItems = ["Services", "About", "Portfolio", "Contact"];

const Navbar = () => {
  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-50 bg-indigo-950 shadow-2xl">

      {/* Brand Banner */}
      <div className="w-full flex flex-col items-center border-b border-yellow-500/20">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full px-4 text-center"
        >
          {/* Logo */}
          <div className="w-full max-w-[1000px] mb-8 p-6 mt-6">
            <Image
              src="/logo-no-bg.svg"
              alt="True Orbit Logo"
              width={1200}
              height={300}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              priority
            />
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-6 px-10 py-3 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[clamp(0.7rem,2vw,1.2rem)] font-black tracking-[0.5em] uppercase shadow-lg">
            Elite Financial Management
          </div>
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full py-5 px-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-bold tracking-widest uppercase bg-indigo-900 border-b border-white/5 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white/60 hover:text-yellow-400 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        <a
          href="tel:5033139953"
          className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-all bg-yellow-500/10 px-6 py-2.5 rounded-full border border-yellow-500/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        >
          <Phone size={14} />
          (503) 313-9953
        </a>
      </nav>

    </header>
  );
};

export default Navbar;
