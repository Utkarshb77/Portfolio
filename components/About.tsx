'use client'

import { motion } from 'framer-motion'

export default function About() {
  const expertise = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'I love crafting clean, responsive interfaces. I work with React, Vite, and Material UI to build fast apps that look great on every device.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      techs: ['React', 'JavaScript', 'Vite', 'Material UI', 'EJS', 'CSS'],
      accent: 'from-blue-500/10 to-cyan-500/10',
      accentBorder: 'group-hover:border-blue-500/30',
    },
    {
      id: 2,
      title: 'Backend Engineering',
      description: 'I build the APIs and server logic that powers apps. REST endpoints, authentication with Passport/JWT, file uploads with Cloudinary — the works.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      techs: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs'],
      accent: 'from-emerald-500/10 to-green-500/10',
      accentBorder: 'group-hover:border-emerald-500/30',
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      description: "I've integrated Gemini AI into real projects for health analysis. I work with Python for data analysis and building ML models from datasets.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      techs: ['Python', 'Gemini AI', 'Pandas', 'TensorFlow'],
      accent: 'from-purple-500/10 to-violet-500/10',
      accentBorder: 'group-hover:border-purple-500/30',
    },
  ]

  const stats = [
    { value: '3+', label: 'Projects Deployed' },
    { value: 'MERN', label: 'Stack Proficiency' },
    { value: 'AI', label: 'Integration' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section id="about" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            My <span className="bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            I'm a full-stack developer who loves building things for the web — from crafting pixel-perfect frontends to designing robust backend architectures.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-card/20 border border-border/50">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Expertise Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {expertise.map((item) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              key={item.id}
              className={`group bg-card/20 border border-border backdrop-blur-sm rounded-3xl p-8 ${item.accentBorder} transition-all duration-500 relative overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:shadow-black/20 hover:bg-card/40`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                {/* Icon */}
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-8 p-3 bg-background rounded-2xl w-max border border-border group-hover:border-primary/20 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background text-muted-foreground text-xs font-semibold rounded-full border border-border transition-colors group-hover:border-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
