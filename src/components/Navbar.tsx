"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = ["Services", "About", "Pricing", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Big logo banner - scrolls away naturally */}
      <div className="w-full flex flex-col items-center bg-indigo-950 border-b border-yellow-500/20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full px-4 text-center"
        >
          <div className="w-full max-w-[1000px] mb-6 p-6 mt-6">
            <Image
              src="/logo-no-bg.svg"
              alt="True Orbit Logo"
              width={1200}
              height={300}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              priority
            />
          </div>
          <div className="flex items-center px-10 py-3 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[clamp(0.7rem,2vw,1.2rem)] font-black tracking-[0.5em] uppercase">
            Elite Financial Management
          </div>
        </motion.div>
      </div>

      {/* Slim sticky nav */}
      <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-indigo-950 shadow-2xl" 
          : "bg-indigo-950"
      }`}>
        <nav className="w-full py-4 px-8 flex items-center justify-between">
          {/* Small logo on left */}
          <Link href="#">
            <Image
              src="/logo-no-bg.svg"
              alt="True Orbit Logo"
              width={160}
              height={40}
              className="h-10 w-auto drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
            />
          </Link>

          {/* Nav links on right */}
          <div className="flex items-center gap-8 md:gap-12 text-sm font-bold tracking-widest uppercase">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hidden md:block text-white/60 hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="tel:5033139953"
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-all bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30 text-sm"
            >
              <Phone size={14} />
              <span className="hidden md:inline">(503) 313-9953</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
