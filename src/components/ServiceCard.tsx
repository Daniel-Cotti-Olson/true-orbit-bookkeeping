"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, index }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-indigo-900 transition-colors">
        <Icon className="text-gold group-hover:text-inherit" size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
