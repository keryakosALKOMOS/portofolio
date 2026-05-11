"use client";

import { motion } from "framer-motion";
import { Briefcase, Activity, Code } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Fullstack Developer",
      company: "Freelance / Projects",
      desc: "Architected and developed scalable web applications using Next.js, React, Node.js, and databases. Focused on delivering premium, high-performance user experiences.",
      icon: Code,
      color: "text-blue-400",
    },
    {
      role: "Flutter Mobile Developer",
      company: "Freelance / Projects",
      desc: "Built cross-platform mobile applications with complex states, real-time database integrations, and customized UI components for iOS and Android.",
      icon: Smartphone, // Need to import
      color: "text-purple-400",
    },
    {
      role: "DevOps Engineer Trainee",
      company: "Continuous Learning & Projects",
      desc: "Designed automated CI/CD pipelines, containerized applications using Docker, and managed clusters via Kubernetes. Maintained infrastructure on AWS and Linux.",
      icon: Activity,
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl glassmorphism border border-white/5 hover:bg-white/[0.02] transition-colors relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <exp.icon className={`w-7 h-7 ${exp.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-sm font-mono text-gray-500 mb-6">{exp.company}</p>
              <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Smartphone } from "lucide-react";
