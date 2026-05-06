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

const PricingCard = ({ name, price, description, features, popular, index }: PricingCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-10 rounded-3xl flex flex-col relative ${
  popular 
    ? 'gold-border shadow-[0_20px_50px_rgba(212,175,55,0.15)] z-10 bg-indigo-950' 
    : 'border border-white/10 bg-white/10'
}`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-indigo-950 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg whitespace-nowrap">
          Most Recommended
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-gold">{price}</span>
        <span className="text-white/50 font-medium"> / month</span>
      </div>
      <p className="text-sm text-white/60 mb-10 leading-relaxed">{description}</p>
      
      <ul className="space-y-5 flex-grow mb-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 text-sm text-white/80">
            <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Separator instead of button */}
      <div className={`w-full h-px ${popular ? 'bg-gold/40' : 'bg-white/20'}`}></div>
    </motion.div>
  );
};

export default PricingCard;
