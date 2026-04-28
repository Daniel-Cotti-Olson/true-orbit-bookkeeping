import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-20 px-8 border-t border-white/5 bg-indigo-luxury relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex flex-col gap-4 mb-8">
            <Image src="/logo-no-bg.svg" alt="True Orbit Logo" width={60} height={60} />
            <div>
              <span className="text-2xl font-black gold-gradient block tracking-tighter uppercase leading-none">True Orbit</span>
              <span className="text-sm font-medium text-white/60 tracking-[0.3em] uppercase">Bookkeeping</span>
            </div>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed mb-8">
            Elevating your business through meticulous financial clarity and strategic advisory. We orbit your success with precision and care.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link href="#services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="#pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
            <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="#contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold" />
              info@trueorbitbookkeeing.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold" />
              <a href="tel:5033139953" className="hover:text-gold transition-colors">(503) 313-9953</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" />
              Remote Nationwide
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
        <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
          © 2026 True Orbit Bookkeeping LLC. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-white/30 uppercase tracking-widest font-bold">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
