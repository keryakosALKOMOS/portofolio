"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitCommit, Star } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";
import Image from "next/image";

export default function GitHubSection() {
  const stats = [
    { icon: GitCommit, label: "Total Commits", value: "1,248+" },
    { icon: GitPullRequest, label: "Pull Requests", value: "86" },
    { icon: Star, label: "Stars Earned", value: "24" },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <Github className="w-12 h-12 text-white mb-4" />
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Open Source <span className="text-gradient">& Activity</span>
          </motion.h2>
          <p className="text-gray-400">Consistent contributions and continuous learning.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glassmorphism border border-white/5 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mock Contribution Graph */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glassmorphism border border-white/5 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Contribution Activity</h3>
            <span className="text-sm text-gray-400">Last 12 months</span>
          </div>
          
          <div className="flex gap-1 overflow-x-auto custom-scrollbar pb-2">
            {Array.from({ length: 52 }).map((_, week) => (
              <div key={week} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, day) => {
                  const pseudoRandom = (seed: number) => {
                    const x = Math.sin(seed + 1) * 10000;
                    return x - Math.floor(x);
                  };
                  const intensity = pseudoRandom(week * 7 + day);
                  let colorClass = "bg-[#161b22]";
                  if (intensity > 0.8) colorClass = "bg-[#39d353]";
                  else if (intensity > 0.6) colorClass = "bg-[#26a641]";
                  else if (intensity > 0.4) colorClass = "bg-[#006d32]";
                  else if (intensity > 0.2) colorClass = "bg-[#0e4429]";

                  return (
                    <motion.div 
                      key={day}
                      whileHover={{ scale: 1.5, zIndex: 10 }}
                      className={`w-3 h-3 rounded-sm ${colorClass}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
