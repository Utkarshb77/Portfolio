'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'FemFlow',
      subtitle: 'WOMEN HEALTH & PCOS DETECTION',
      description: 'A comprehensive women\'s health platform for period cycle tracking and PCOS detection using intelligent analysis to help women monitor their reproductive health.',
      stats: [
        { value: 'AI', label: 'Detection' },
        { value: 'Cycle', label: 'Tracking' },
      ],
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: '#'
    },
    {
      id: 2,
      title: 'Listing App',
      subtitle: 'PROPERTY LISTING PLATFORM',
      description: 'A modern listing application that allows users to browse, search, and manage property listings with an intuitive user interface and powerful search features.',
      stats: [
        { value: 'CRUD', label: 'Operations' },
        { value: 'Search', label: 'Filters' },
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather App',
      subtitle: 'WEATHER FORECAST APPLICATION',
      description: 'A real-time weather application that provides accurate forecasts, current conditions, and weather alerts for any location worldwide.',
      stats: [
        { value: '7-Day', label: 'Forecast' },
        { value: 'Live', label: 'Updates' },
      ],
      tags: ['React', 'Weather API', 'CSS', 'JavaScript'],
      link: '#'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  return (
    <section id="projects" className="py-32 px-6 bg-background relative border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Featured <span className="text-primary/90">Projects</span>
          </h2>
        </motion.div>
        
        {/* Projects List - Minimalist grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={projectVariants}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group flex flex-col rounded-3xl bg-card/20 border border-border overflow-hidden hover:border-border/80 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/20"
            >
              {/* Visual Area - Clean architectural wireframe style */}
              <div className="h-56 relative bg-card border-b border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <motion.div 
                  animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-24 h-24 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center group-hover:border-primary/30 transition-colors"
                >
                  <svg className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </motion.div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow bg-background/30">
                <p className="text-primary text-[10px] font-bold tracking-widest mb-3 uppercase">{project.subtitle}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Micro Stats */}
                <div className="flex gap-4 mb-6 pt-6 border-t border-border/50">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex-1">
                      <div className="text-lg font-bold text-foreground">
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-card rounded-md border border-border text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <motion.a 
                  href={project.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-background border border-border text-foreground text-sm font-semibold flex items-center justify-center gap-2 group-hover:bg-foreground group-hover:text-background transition-all mt-auto"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-card hover:border-border/80 transition-all text-sm"
          >
            <span>View full repository on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
