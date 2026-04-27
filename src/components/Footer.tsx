import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-16 px-8 border-t border-white/5 bg-luxury-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="True Orbit Logo" width={32} height={32} className="rounded-full" />
            <span className="text-xl font-bold gold-gradient">True Orbit Bookkeeping</span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Elevating your business through meticulous financial clarity and strategic advisory. We orbit your success with precision and care.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="#services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="#pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
            <li><Link href="#about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="#contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>info@trueorbitbookkeeing.com</li>
            <li>(555) 000-0000</li>
            <li>Remote Services Nationwide</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8 pt-8 border-t border-white/5">
        <p className="text-gray-600 text-xs">
          © 2026 True Orbit Bookkeeping LLC. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-gray-500">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
