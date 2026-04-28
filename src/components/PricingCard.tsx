"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  index: number;
}

const PricingCard = ({ name, price, description, features, cta, popular, index }: PricingCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-10 rounded-3xl border ${popular ? 'gold-border scale-105 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'border-white/5 bg-white/[0.03]'} flex flex-col backdrop-blur-md`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-indigo-950 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
          Most Recommended
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-gold">{price}</span>
        <span className="text-white/50 font-medium"> / month</span>
      </div>
      <p className="text-sm text-white/60 mb-10 leading-relaxed">{description}</p>
      
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 text-sm text-white/80">
            <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-2xl font-bold tracking-wide transition-all ${popular ? 'bg-gold text-indigo-950 hover:bg-gold-light shadow-lg' : 'gold-border hover:bg-white/5 text-white'}`}
      >
        {cta}
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;
