"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectDetails } from "@/data/projectsData";
import { GithubIcon } from "@/components/Icons";

export default function ProjectClient({ 
  project, 
  screenshots 
}: { 
  project: ProjectDetails; 
  screenshots: string[]; 
}) {
  const { t, language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-black to-black" />
        <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-blue-500/10 blur-[100px] opacity-50" />
        <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] rounded-full bg-purple-500/10 blur-[100px] opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${isAr ? 'rotate-180 group-hover:translate-x-1 group-hover:-translate-x-0' : ''}`} />
          {isAr ? "العودة للرئيسية" : "Back to Home"}
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-blue-400 font-mono text-sm mb-4">{project.role}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {project.longDescription[language as "en" | "ar"]}
          </p>

          <div className="flex gap-4 mt-8">
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <GithubIcon className="w-5 h-5" /> {isAr ? "الكود" : "Code"}
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                <ExternalLink className="w-5 h-5" /> {isAr ? "معاينة" : "Live Demo"}
              </a>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glassmorphism p-8 rounded-3xl border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6">{isAr ? "الميزات الرئيسية" : "Key Features"}</h2>
            <ul className="space-y-4">
              {project.features[language as "en" | "ar"].map((feature, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <span className="text-blue-500 mt-1">✦</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-3xl border border-white/10 h-fit"
          >
            <h2 className="text-2xl font-bold mb-6">{isAr ? "التقنيات المستخدمة" : "Technologies"}</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Details */}
        {project.technicalDetails && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 glassmorphism p-8 md:p-12 rounded-3xl border border-purple-500/20 bg-purple-900/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-purple-400 font-mono">{'</>'}</span> 
              {isAr ? "البنية التقنية والتفاصيل" : "Technical Architecture & Details"}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              {project.technicalDetails[language as "en" | "ar"]}
            </p>
          </motion.div>
        )}

        {/* Screenshots Gallery */}
        {screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">{isAr ? "معرض الصور" : "Screenshots Gallery"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((src, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden aspect-video border border-white/10 bg-black/50"
                >
                  <img 
                    src={src} 
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={src} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
