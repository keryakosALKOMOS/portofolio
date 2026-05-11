"use client";

import { motion } from "framer-motion";

export default function Education() {
  const timeline = [
    {
      type: "university",
      logo: "/logos/AASTMT.png",
      title: "College of Computing and Information Technology",
      subtitle: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
      date: "Grade: Very Good",
      color: "border-blue-500/30",
      bg: "bg-white",
    },
    {
      type: "training",
      logo: "/logos/ITI.jpg",
      title: "Flutter Course",
      subtitle: "Information Technology Institute (ITI) - Ministry of Communications and IT",
      date: "Completed",
      color: "border-purple-500/30",
      bg: "bg-white",
    },
    {
      type: "certification",
      logo: "/logos/DEPI.png",
      title: "DevOps Engineer Certification",
      subtitle: "Digital Egypt Pioneers Initiative (DEPI) - Ministry of Communications and IT",
      date: "Certified",
      color: "border-green-500/30",
      bg: "bg-white",
    },
    {
      type: "certification",
      logo: "/micro/micro1-certificate.jpeg",
      title: "Micro1 Passed Interview & Certificate",
      subtitle: "Micro1 World-Class Developer Assessment",
      date: "Certified",
      color: "border-teal-500/30",
      bg: "bg-black",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Education & <span className="text-gradient">Certifications</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-white/10 -z-10 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
              >
                <div className={`w-20 h-20 rounded-full ${item.bg} border-4 ${item.color} flex items-center justify-center shrink-0 relative mx-auto md:mx-0 overflow-hidden p-2`}>
                  <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
                  {i !== timeline.length - 1 && (
                    <div className="absolute top-20 bottom-[-3rem] w-[2px] bg-gradient-to-b from-white/20 to-transparent block md:hidden" />
                  )}
                </div>
                
                <div className="flex-1 p-8 rounded-2xl glassmorphism border border-white/5 hover:border-white/20 transition-colors bg-white/[0.01]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300 w-fit shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-lg text-gray-400">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
