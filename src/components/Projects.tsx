"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";
import { useLanguage } from "@/i18n/LanguageContext";

  const colors = [
    "from-blue-500/20 to-indigo-900/20",
    "from-pink-500/20 to-rose-900/20",
    "from-purple-500/20 to-fuchsia-900/20",
    "from-teal-500/20 to-cyan-900/20",
    "from-green-500/20 to-emerald-900/20",
    "from-orange-500/20 to-red-900/20",
    "from-cyan-500/20 to-blue-900/20"
  ];
  
  const techStacks = [
    ["Next.js", "Node.js", "PostgreSQL"],
    ["Flutter", "Node.js", "Firebase"],
    ["Flutter", "Firebase", "ML"],
    ["Docker", "Prometheus", "Grafana", "Node.js"],
    ["Flutter", "Dart", "Local DB"],
    ["Docker", "Jenkins", "GitHub Actions"],
    ["Kubernetes", "Nginx", "Linux"]
  ];
  
  const codeLinks = [
    "https://github.com/keryakosALKOMOS/educational-platform",
    "https://github.com/keryakosalkomos-rgb/DOKRAN.store",
    "https://github.com/beshoyArmia/Sugar_Mate",
    "https://github.com/keryakosALKOMOS/URL_Shortener_v1",
    "", "", ""
  ];
  
  const liveLinks = [
    "",
    "https://dokranstore-production.up.railway.app",
    "", "", "", "", ""
  ];


function ProjectCard({ project, index }: { project: any; index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-black/50 p-8 glassmorphism overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
      
      <div className="flex flex-col h-full z-10 relative">
        <div className="text-xs font-mono text-blue-400 mb-2">{project.role}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6 flex-1">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
              <Github className="w-4 h-4" /> {project.tCode}
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
              <ExternalLink className="w-4 h-4" /> {project.tLive}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t.projects.title} <span className="text-gradient">{t.projects.subtitle}</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((item, index) => {
            const project = {
              ...item,
              color: colors[index],
              tech: techStacks[index],
              codeLink: codeLinks[index],
              liveLink: liveLinks[index],
              tCode: t.projects.code,
              tLive: t.projects.live
            };
            return (
            <ProjectCard key={index} project={project} index={index} />
          )})}
        </div>
      </div>
    </section>
  );
}
