"use client";

import { motion } from "framer-motion";
import { Terminal, Server, GitBranch, Box, Activity } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useState } from "react";

const logs = [
  "[OK] Initializing deployment pipeline...",
  "[OK] Fetching latest commit from main branch",
  "[OK] Building Docker image 'keryakos/portfolio:latest'",
  "[OK] Running unit tests: 42 passed, 0 failed",
  "[OK] Pushing image to registry",
  "[OK] Applying Kubernetes manifests",
  "[OK] Scaling pods: 3/3 ready",
  "[OK] Updating Nginx reverse proxy configuration",
  "[SUCCESS] Deployment completed successfully! 🚀",
];

export default function DevOpsShowcase() {
  const { t } = useLanguage();
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black -z-10" />

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4"
          >
            <Activity className="w-10 h-10 text-blue-500" /> 
            {t.devops.title} <span className="text-gradient">{t.devops.subtitle}</span>
          </motion.h2>
          <p className="text-gray-400">{t.devops.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> {t.devops.terminalTitle}
              </div>
            </div>
            <div className="p-6 font-mono text-sm h-[300px] overflow-y-auto custom-scrollbar flex flex-col gap-2">
              <div className="text-green-400">$ ./deploy.sh --env production</div>
              {visibleLogs.map((log, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${log?.includes('SUCCESS') ? 'text-blue-400 font-bold mt-4' : 'text-gray-300'}`}
                >
                  {log}
                </motion.div>
              ))}
              {visibleLogs.length < logs.length && (
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-white/50 inline-block mt-2"
                />
              )}
            </div>
          </motion.div>

          {/* Animated Pipeline Nodes */}
          <div className="relative h-[400px] flex flex-col justify-between">
            {/* Connecting Line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-white/10 -z-10" />
            <motion.div 
              className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 4, ease: "linear" }}
            />

            {[
              { icon: GitBranch, title: "Version Control", desc: "GitHub Actions triggers build", color: "text-purple-400", bg: "bg-purple-500/20" },
              { icon: Box, title: "Containerization", desc: "Docker builds the image", color: "text-blue-400", bg: "bg-blue-500/20" },
              { icon: Server, title: "Orchestration", desc: "Kubernetes manages pods", color: "text-green-400", bg: "bg-green-500/20" }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 1.2, duration: 0.5 }}
                className="flex items-center gap-6"
              >
                <div className={`w-14 h-14 rounded-full ${node.bg} border border-white/10 flex items-center justify-center relative z-10 glassmorphism`}>
                  <node.icon className={`w-6 h-6 ${node.color}`} />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`absolute inset-0 rounded-full border border-${node.color.split('-')[1]}-500/50`}
                  />
                </div>
                <div className="flex-1 p-4 rounded-xl glassmorphism border border-white/5 bg-white/[0.02]">
                  <h4 className="text-lg font-bold text-white">{node.title}</h4>
                  <p className="text-sm text-gray-400">{node.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
