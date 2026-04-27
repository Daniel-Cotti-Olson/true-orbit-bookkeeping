"use client";

import { 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  Users,
  Target
} from "lucide-react";
import { motion } from "framer-motion";
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
    <main className="min-h-screen bg-luxury-black text-white selection:bg-gold selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-indigo/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-purple/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold tracking-widest uppercase mb-10"
          >
            <Sparkles size={14} /> Elite Financial Management
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
          >
            Your Trusted Partner in <br />
            <span className="gold-gradient">Financial Clarity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            High-end bookkeeping and strategic financial advisory designed specifically for ambitious small businesses and solopreneurs who demand excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="bg-gold text-luxury-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex items-center gap-3">
              Book a Strategy Call <ArrowRight size={22} />
            </button>
            <button className="gold-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
              Explore Services
            </button>
          </motion.div>

          {/* Social Proof Placeholder */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-24 pt-12 border-t border-white/5 w-full max-w-4xl"
          >
            <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-8">Trusted by growing companies</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-2xl font-bold">FINTECH</div>
              <div className="text-2xl font-bold">SOLUTIONS</div>
              <div className="text-2xl font-bold">NEXUS</div>
              <div className="text-2xl font-bold">STRATOS</div>
              <div className="text-2xl font-bold">ORBIT</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-32 px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Expert Financial <br /><span className="gold-gradient">Services</span></h2>
              <p className="text-gray-400 text-lg">We provide the technical foundation your business needs to scale with confidence. No more guesswork, just data-driven growth.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-1 bg-gold"></div>
               <div className="w-4 h-1 bg-gold/30"></div>
               <div className="w-4 h-1 bg-gold/10"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-32 px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury-indigo/10 blur-[120px] rounded-full -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden gold-border p-1">
              <div className="w-full h-full bg-luxury-gray flex items-center justify-center">
                <Users size={120} className="text-gold opacity-20" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-luxury-indigo p-8 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-4xl font-black text-gold mb-1">100%</p>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Commitment</p>
            </div>
          </motion.div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Elevating Businesses <br />Through <span className="gold-gradient">Precision</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              True Orbit Bookkeeping was founded on a simple principle: small businesses deserve big-firm financial expertise. We don't just record numbers; we interpret them.
            </p>
            <div className="space-y-6">
              {[
                { icon: Target, title: "Mission Driven", text: "Empowering owners to focus on their craft." },
                { icon: ShieldCheck, title: "Uncompromising Integrity", text: "Your financial security is our top priority." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <item.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Transparent <span className="gold-gradient">Pricing</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Investment in clarity. Select the orbit that matches your business trajectory.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-32 px-8 bg-luxury-dark relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-luxury-purple/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">Secure Your <br /><span className="gold-gradient">Financial Future</span></h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">Ready to orbit your business to new heights? Contact us today for a free initial consultation and discovery call.</p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "info@trueorbitbookkeeing.com" },
                { icon: Phone, label: "Call Us", value: "(555) 000-0000" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-widest uppercase text-gray-500 mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2rem] border border-white/5 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none transition-all text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none transition-all text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Business Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none transition-all text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Service Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none transition-all text-gray-400 appearance-none">
                <option>Select a Service</option>
                <option>Core Orbit</option>
                <option>Professional Clarity</option>
                <option>Elite Advisory</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold outline-none transition-all text-white"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold text-luxury-black py-5 rounded-2xl font-black text-lg hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all"
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
