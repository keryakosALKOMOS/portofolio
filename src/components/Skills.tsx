"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  
  const colors = [
    "from-cyan-500/20 to-blue-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-purple-500/20 to-fuchsia-500/20",
    "from-orange-500/20 to-red-500/20",
    "from-pink-500/20 to-rose-500/20",
    "from-yellow-500/20 to-amber-500/20"
  ];
  const borders = [
    "border-blue-500/30",
    "border-green-500/30",
    "border-purple-500/30",
    "border-orange-500/30",
    "border-pink-500/30",
    "border-yellow-500/30"
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t.skills.title} <span className="text-gradient">{t.skills.subtitle}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {t.skills.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.skills.categories.map((category, index) => {
            const color = colors[index];
            const border = borders[index];
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl glassmorphism border ${border} bg-gradient-to-br ${color} relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 -z-10" />
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-sm font-medium text-gray-200 shadow-xl backdrop-blur-md cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
