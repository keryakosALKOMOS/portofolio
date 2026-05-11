"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  
  const types = ["university", "training", "certification", "certification"];
  const logos = [
    "/portofolio/logos/AASTMT.png",
    "/portofolio/logos/ITI.jpg",
    "/portofolio/logos/DEPI.png",
    "/portofolio/micro/micro1-certificate.jpeg"
  ];
  const colors = [
    "border-blue-500/30",
    "border-purple-500/30",
    "border-green-500/30",
    "border-teal-500/30"
  ];
  const bgs = ["bg-white", "bg-white", "bg-white", "bg-black"];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t.education.title} <span className="text-gradient">{t.education.subtitle}</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-white/10 -z-10 hidden md:block" />

          <div className="space-y-12">
            {t.education.items.map((item, i) => {
              const logo = logos[i];
              const color = colors[i];
              const bg = bgs[i];
              return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
              >
                <div className={`w-20 h-20 rounded-full ${bg} border-4 ${color} flex items-center justify-center shrink-0 relative mx-auto md:mx-0 overflow-hidden p-2`}>
                  <img src={logo} alt={item.title} className="w-full h-full object-contain" />
                  {i !== t.education.items.length - 1 && (
                    <div className="absolute top-20 bottom-[-3rem] w-[2px] bg-gradient-to-b from-white/20 to-transparent block md:hidden" />
                  )}
                </div>
                
                <div className="flex-1 p-8 rounded-2xl glassmorphism border border-white/5 hover:border-white/20 transition-colors bg-white/[0.01]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 w-fit shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-lg text-gray-400">{item.subtitle}</p>
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
