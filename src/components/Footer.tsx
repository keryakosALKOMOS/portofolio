"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, FacebookIcon as Facebook, InstagramIcon as Instagram } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Keryakos Alkis</h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Fullstack Developer, Flutter Mobile Developer, and DevOps Engineer. Building the future of scalable digital experiences.
            </p>
            <div className="flex gap-4">
              <motion.a target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} href="https://www.linkedin.com/in/keryakos-alkis/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} href="https://github.com/keryakosALKOMOS" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} href="https://www.facebook.com/profile.php?id=100005073047721" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} href="https://www.instagram.com/kero._._alkomos/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} href="mailto:kerooegypt2030@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> kerooegypt2030@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Egypt
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Keryakos Alkis. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Designed in 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
