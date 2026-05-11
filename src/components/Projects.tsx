"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/Icons";
import Image from "next/image";

const projects = [
  {
    title: "Educational Platform",
    description: "A comprehensive learning management system with robust backend and scalable architecture.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    role: "Fullstack Developer",
    color: "from-blue-500/20 to-indigo-900/20",
    codeLink: "https://github.com/keryakosALKOMOS/educational-platform",
  },
  {
    title: "DOKRAN Store",
    description: "Full-featured shopping system with admin dashboard, favorites, cart, and seamless API integration.",
    tech: ["Flutter", "Node.js", "Firebase"],
    role: "Fullstack Developer",
    color: "from-pink-500/20 to-rose-900/20",
    codeLink: "https://github.com/keryakosalkomos-rgb/DOKRAN.store",
    liveLink: "https://dokranstore-production.up.railway.app",
  },
  {
    title: "URL Shortener & Monitoring",
    description: "Containerized web service featuring custom Grafana dashboards and Prometheus integration for advanced metrics tracking.",
    tech: ["Docker", "Prometheus", "Grafana", "Node.js"],
    role: "DevOps Engineer",
    color: "from-teal-500/20 to-cyan-900/20",
    codeLink: "https://github.com/keryakosALKOMOS/URL_Shortener_v1",
  },
  {
    title: "Budget App",
    description: "Financial management mobile app with tracking and categorization.",
    tech: ["Flutter", "Dart", "Local DB"],
    role: "Mobile Developer",
    color: "from-green-500/20 to-emerald-900/20",
  },
  {
    title: "Sugar Mate",
    description: "Personalized recommendations and health monitoring for diabetics using Machine Learning.",
    tech: ["Flutter", "Firebase", "ML"],
    role: "Mobile Developer",
    color: "from-purple-500/20 to-fuchsia-900/20",
    codeLink: "https://github.com/beshoyArmia/Sugar_Mate",
  },
  {
    title: "DevOps CI/CD Pipeline",
    description: "Automated deployment workflow ensuring seamless delivery and testing.",
    tech: ["Docker", "Jenkins", "GitHub Actions"],
    role: "DevOps Engineer",
    color: "from-orange-500/20 to-red-900/20",
  },
  {
    title: "Kubernetes Deployment",
    description: "Container orchestration with scaling, monitoring, and Nginx reverse proxy.",
    tech: ["Kubernetes", "Nginx", "Linux"],
    role: "DevOps Engineer",
    color: "from-cyan-500/20 to-blue-900/20",
  },
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
        <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
        
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
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
