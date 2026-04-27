"use client";

import Image from "next/image";
import { 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

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
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center fixed top-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-luxury-gray">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="True Orbit Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold gold-gradient">True Orbit</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <button className="gold-border px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
          Client Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full pt-40 pb-24 px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Trusted Partner in <br />
            <span className="gold-gradient">Financial Clarity</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            High-end bookkeeping and strategic financial advisory designed specifically for ambitious small businesses and solopreneurs.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gold text-luxury-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition-colors flex items-center gap-2">
              Book a Strategy Call <ArrowRight size={20} />
            </button>
            <button className="gold-border px-8 py-4 rounded-full font-bold text-lg hover:bg-luxury-gray transition-colors">
              Explore Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-8 bg-luxury-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expert Financial Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-luxury-gray border border-luxury-gray hover:border-gold/50 transition-all"
              >
                <service.icon className="text-gold mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400">Tailored solutions for every stage of your business journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border ${plan.popular ? 'gold-border scale-105 relative' : 'border-luxury-gray bg-luxury-dark'} flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-luxury-black px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-gray-500"> / month</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={18} className="text-gold shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gold text-luxury-black hover:bg-gold-dark' : 'gold-border hover:bg-luxury-gray'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 px-8 bg-luxury-dark">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Secure Your <br /><span className="gold-gradient">Financial Future</span></h2>
            <p className="text-gray-400 mb-10">Ready to orbit your business to new heights? Contact us today for a free initial consultation and discovery call.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gray flex items-center justify-center text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium">info@trueorbitbookkeeing.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gray flex items-center justify-center text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">(555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-luxury-black p-8 rounded-3xl border border-luxury-gray space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-luxury-gray border border-luxury-gray rounded-xl p-4 focus:border-gold outline-none transition-all" />
              <input type="text" placeholder="Last Name" className="bg-luxury-gray border border-luxury-gray rounded-xl p-4 focus:border-gold outline-none transition-all" />
            </div>
            <input type="email" placeholder="Business Email" className="w-full bg-luxury-gray border border-luxury-gray rounded-xl p-4 focus:border-gold outline-none transition-all" />
            <select className="w-full bg-luxury-gray border border-luxury-gray rounded-xl p-4 focus:border-gold outline-none transition-all text-gray-400">
              <option>Select a Service</option>
              <option>Core Orbit</option>
              <option>Professional Clarity</option>
              <option>Elite Advisory</option>
            </select>
            <textarea placeholder="Tell us about your business" rows={4} className="w-full bg-luxury-gray border border-luxury-gray rounded-xl p-4 focus:border-gold outline-none transition-all"></textarea>
            <button className="w-full bg-gold text-luxury-black py-4 rounded-xl font-bold hover:bg-gold-dark transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-8 border-t border-luxury-gray">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="True Orbit Logo" width={30} height={30} className="rounded-full" />
            <span className="text-lg font-bold gold-gradient">True Orbit Bookkeeping LLC</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 True Orbit Bookkeeping LLC. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
