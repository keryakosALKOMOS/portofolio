"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Cpu } from "lucide-react";

export default function About() {
  const cards = [
    { icon: Code2, title: "Fullstack Web", desc: "Building scalable and responsive modern web applications." },
    { icon: Smartphone, title: "Flutter Mobile", desc: "Creating cross-platform mobile experiences with smooth animations." },
    { icon: Server, title: "Cloud & DevOps", desc: "Automating pipelines, orchestrating containers, and managing Linux servers." },
    { icon: Cpu, title: "Performance", desc: "Optimizing UI/UX, database queries, and system architectures." },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering <span className="text-gradient">the Future</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                I am a passionate engineer obsessed with solving complex problems through elegant code and robust infrastructure. My expertise spans across <span className="text-white font-medium">fullstack web development</span>, <span className="text-white font-medium">Flutter mobile applications</span>, and <span className="text-white font-medium">Cloud & DevOps engineering</span>.
              </p>
              <p>
                Whether it's crafting a pixel-perfect modern UI/UX experience, designing automated CI/CD pipelines, or optimizing scalable systems, I bring a product-minded approach to technical execution.
              </p>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl glassmorphism border border-white/5 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
