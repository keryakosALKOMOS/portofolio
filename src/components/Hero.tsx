"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight, Smartphone } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, FacebookIcon as Facebook, InstagramIcon as Instagram } from "@/components/Icons";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wider text-gray-300">Available for Work</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-gradient-accent">Keryakos Alkis</span>
          </h1>
          
          <div className="h-12 mb-6">
            {/* Simple typing effect simulation with CSS or Framer */}
            <motion.p 
              className="text-xl md:text-2xl font-mono text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white">&gt; </span> Fullstack Developer <span className="text-blue-500">|</span> Flutter Developer <span className="text-purple-500">|</span> DevOps Engineer
            </motion.p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
            “Building scalable applications, cloud infrastructure, and premium digital experiences.”
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a 
              href="/portofolio/cv/Keryakos_Alkis_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glassmorphism font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" /> Download CV
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/keryakos-alkis/" },
              { icon: Github, href: "https://github.com/keryakosALKOMOS" },
              { icon: Mail, href: "mailto:kerooegypt2030@gmail.com" },
              { icon: Smartphone, href: "https://wa.me/201272964356" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100005073047721" },
              { icon: Instagram, href: "https://www.instagram.com/kero._._alkomos/" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#fff" }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border-2 border-purple-500/30"
            />
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 bg-gray-900 z-0">
              {/* Fallback image if /profile/profile.jpg fails */}
              <img 
                src="/portofolio/profile/profile.jpg" 
                alt="Keryakos Alkis" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
