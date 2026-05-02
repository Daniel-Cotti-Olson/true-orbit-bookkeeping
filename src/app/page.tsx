"use client";

import { 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";

const services = [
  {
    title: "Full-Cycle Bookkeeping",
    description: "Meticulous recording of all financial transactions, ensuring your ledgers are always accurate and up-to-date.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Strategy",
    description: "Deep-dive analysis and cash flow forecasting to help you make informed decisions for future growth.",
    icon: TrendingUp,
  },
  {
    title: "Tax Readiness",
    description: "Organization of financial records to ensure a seamless tax season with maximum eligible deductions.",
    icon: Search,
  },
];

const plans = [
  {
    name: "Core Orbit",
    price: "$299",
    description: "Essential monthly bookkeeping for solopreneurs.",
    features: ["Monthly Bank Reconciliation", "Financial Statements", "Email Support", "Tax Ready Records"],
    cta: "Start with Core",
    popular: false,
  },
  {
    name: "Professional Clarity",
    price: "$599",
    description: "Weekly updates and strategy for growing businesses.",
    features: ["Weekly Bookkeeping", "Accounts Payable/Receivable", "Monthly Strategy Call", "Priority Support"],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Elite Advisory",
    price: "$1,200+",
    description: "Full financial controller and forecasting services.",
    features: ["Daily Transaction Entry", "Cash Flow Forecasting", "Budgeting vs. Actuals", "Unlimited Consultations"],
    cta: "Inquire for Elite",
    popular: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-indigo-luxury text-white selection:bg-gold selection:text-indigo-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter"
          >
            Your Trusted Partner in <br />
            <span className="gold-gradient">Financial Clarity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            High-end bookkeeping and strategic financial advisory designed specifically for ambitious small businesses and solopreneurs who demand excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-gold text-indigo-950 px-12 py-6 rounded-2xl font-black text-xl hover:bg-gold-light hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all flex items-center gap-3">
              Book a Strategy Call <ArrowRight size={24} />
            </button>
            <button className="gold-border px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all">
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-40 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
              Expert Financial <br />
              <span className="gold-gradient">Services</span>
            </h2>
            <div className="w-24 h-1.5 bg-gold rounded-full mb-8"></div>
            <p className="text-white/60 text-xl max-w-2xl font-medium">We provide the technical foundation your business needs to scale with confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-40 px-8 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-20"
          >
            {/* Footprint container to maintain bottom position and center the reduced image */}
            <div className="w-64 h-80 md:w-72 md:h-96 mx-auto flex items-end justify-center relative z-10">
              {/* Reduced Image container (approx 40% size) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 w-24 h-32 md:w-28 md:h-40 shadow-2xl">
                <Image 
                  src="/Daniel4.jpg" 
                  alt="Daniel - True Orbit Bookkeeping" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Adjusted decorative circles to follow the smaller image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold/20 blur-[60px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
              Elevating Business <br />
              <span className="gold-gradient">Through Precision</span>
            </h2>
            <p className="text-white/60 text-xl md:text-2xl mb-16 leading-relaxed font-medium">
              True Orbit Bookkeeping was founded on a simple principle: small businesses deserve big-firm financial expertise. We don't just record numbers; we interpret them.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              {[
                { icon: Target, title: "Mission Driven", text: "Empowering owners to focus on their craft." },
                { icon: ShieldCheck, title: "Uncompromising Integrity", text: "Your financial security is our top priority." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group p-6 rounded-[2rem] bg-white/5 border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-indigo-950 transition-all duration-500">
                    <item.icon size={24} className="text-gold group-hover:text-inherit" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-white/40 text-lg leading-tight">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-40 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
              Transparent <br />
              <span className="gold-gradient">Pricing</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">Investment in clarity. Select the orbit that matches your business trajectory.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-40 px-8 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
              Secure Your <br />
              <span className="gold-gradient">Financial Future</span>
            </h2>
            <p className="text-white/60 text-2xl mb-16 leading-relaxed font-medium">Ready to orbit your business to new heights? Contact us today for a free initial consultation and discovery call.</p>
            
            <div className="space-y-10">
              {[
                { icon: Mail, label: "Email Us", value: "info@trueorbitbookkeeing.com", href: "mailto:info@trueorbitbookkeeing.com" },
                { icon: Phone, label: "Call Us", value: "(503) 313-9953", href: "tel:5033139953" },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-8 group w-fit">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-indigo-950 transition-all duration-500 shadow-xl">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.3em] uppercase text-white/30 mb-2">{item.label}</p>
                    <p className="text-2xl font-black text-white group-hover:text-gold transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-white/10 space-y-10 shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
          >
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em] ml-1">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-gold outline-none transition-all text-white text-lg font-medium" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em] ml-1">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-gold outline-none transition-all text-white text-lg font-medium" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em] ml-1">Business Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-gold outline-none transition-all text-white text-lg font-medium" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em] ml-1">Service Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-gold outline-none transition-all text-white/40 text-lg font-medium appearance-none">
                <option>Select a Service</option>
                <option>Core Orbit</option>
                <option>Professional Clarity</option>
                <option>Elite Advisory</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black text-white/30 uppercase tracking-[0.3em] ml-1">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-gold outline-none transition-all text-white text-lg font-medium"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold text-indigo-950 py-7 rounded-3xl font-black text-xl hover:bg-gold-light hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all uppercase tracking-widest"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
