'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'FemFlow',
      subtitle: 'WOMEN HEALTH & PCOS DETECTION',
      description: 'A full-stack platform for tracking menstrual cycles, symptoms, and hormonal patterns. Uses Google Gemini AI for intelligent PCOS risk analysis with interactive Recharts-powered health dashboards.',
      stats: [
        { value: 'Gemini', label: 'AI Powered' },
        { value: 'MERN', label: 'Full Stack' },
        { value: 'Charts', label: 'Recharts' },
      ],
      tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Gemini AI'],
      link: 'https://fem-flow.vercel.app/',
      github: 'https://github.com/Utkarshb77/FemFlow',
      accentText: 'text-rose-400',
      accentGradient: 'from-rose-500 to-pink-500',
      screenshot: '/assets/femflow-screenshot.png',
    },
    {
      id: 2,
      title: 'StayNest',
      subtitle: 'PROPERTY LISTING PLATFORM',
      description: 'A full-stack Airbnb-inspired property listing platform with user auth via Passport.js, Cloudinary image uploads, interactive maps, and session-based booking management.',
      stats: [
        { value: 'Auth', label: 'Passport.js' },
        { value: 'Cloud', label: 'Cloudinary' },
        { value: 'MVC', label: 'Architecture' },
      ],
      tags: ['Node.js', 'Express', 'EJS', 'MongoDB', 'Passport', 'Cloudinary'],
      link: 'https://staynest-0bc9.onrender.com/',
      github: 'https://github.com/Utkarshb77/StayNest',
      accentText: 'text-emerald-400',
      accentGradient: 'from-emerald-500 to-teal-500',
      screenshot: '/assets/staynest-screenshot.png',
    },
    {
      id: 3,
      title: 'Weather WorldWide',
      subtitle: 'REAL-TIME WEATHER APPLICATION',
      description: 'A sleek React weather app built with Material UI and Vite. Fetches real-time global weather data with beautiful, responsive UI components and dynamic weather visualizations.',
      stats: [
        { value: 'MUI', label: 'Material UI' },
        { value: 'Live', label: 'API Data' },
        { value: 'Vite', label: 'Bundler' },
      ],
      tags: ['React', 'Vite', 'Material UI', 'OpenWeather API'],
      link: 'https://weather-world-wide.vercel.app/',
      github: 'https://github.com/Utkarshb77/Weather_WorldWide',
      accentText: 'text-sky-400',
      accentGradient: 'from-sky-500 to-blue-500',
      screenshot: '/assets/weather-screenshot.png',
    },
  ]

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  }

  return (
    <section id="projects" className="py-32 px-6 bg-background relative border-t border-border/30">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Real-world applications I've built from scratch — designed, developed, and deployed.
          </p>
        </motion.div>
        
        {/* Projects — Full-width stacked cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl bg-card/20 border border-border overflow-hidden hover:border-white/[0.1] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/30"
            >
              {/* Screenshot — Left side (alternates on even) */}
              <div className={`relative h-72 lg:h-auto lg:min-h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:bg-gradient-to-r" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden" />

                {/* Live badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/80 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </div>
              </div>

              {/* Content — Right side */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Subtitle */}
                <p className={`${project.accentText} text-[11px] font-bold tracking-[0.2em] mb-4 uppercase`}>
                  {project.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
                  {project.description}
                </p>

                {/* Stats Row */}
                <div className="flex gap-6 mb-8">
                  {project.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className={`text-xl font-bold bg-gradient-to-r ${project.accentGradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-background rounded-lg border border-border text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Project
                  </motion.a>
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-card hover:border-border/80 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.a 
            href="https://github.com/Utkarshb77"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-card hover:border-border/80 transition-all text-sm group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>View all projects on GitHub</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
