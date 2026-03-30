'use client'

import { useState } from 'react'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Analytics Pro',
      subtitle: 'DATA ANALYTICS PLATFORM',
      description: 'A comprehensive data analytics platform with real-time dashboards, advanced filtering, and predictive insights for business intelligence.',
      stats: [
        { value: '1,200+', label: 'Data Sources' },
        { value: '500K+', label: 'Records' },
        { value: '95%', label: 'Accuracy' },
      ],
      tags: ['React', 'Next.js', 'TypeScript', 'D3.js', 'PostgreSQL', 'Tailwind CSS'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '#'
    },
    {
      id: 2,
      title: 'CloudSync',
      subtitle: 'FILE MANAGEMENT SYSTEM',
      description: 'Enterprise-grade file management system with secure cloud storage, version control, and collaborative workspace features for teams.',
      stats: [
        { value: '10GB+', label: 'Storage' },
        { value: '50+', label: 'Team Members' },
        { value: '99.9%', label: 'Uptime' },
      ],
      tags: ['Next.js', 'AWS S3', 'Node.js', 'MongoDB', 'Docker', 'Tailwind CSS'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '#'
    },
    {
      id: 3,
      title: 'DevFlow',
      subtitle: 'PROJECT MANAGEMENT TOOL',
      description: 'Modern project management solution with Kanban boards, real-time collaboration, sprint planning, and comprehensive team analytics.',
      stats: [
        { value: '100+', label: 'Teams' },
        { value: '50K+', label: 'Tasks' },
        { value: '24/7', label: 'Support' },
      ],
      tags: ['React', 'Firebase', 'TypeScript', 'Socket.io', 'Tailwind CSS', 'Vercel'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Work
          </h2>
        </div>
        
        {/* Projects - Large Cards with Image Left & Details Right */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 bg-card hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-stretch">
                {/* Left Side - Image */}
                <div
                  className="h-80 md:h-full min-h-96 relative overflow-hidden transition-all duration-500 group-hover:scale-105 bg-background"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </div>

                {/* Right Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 bg-black">
                  {/* Title Section */}
                  <div>
                    <p className="text-accent text-sm font-bold tracking-wider mb-2">{project.subtitle}</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/75 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 pt-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="flex-1">
                        <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                          {stat.value}
                        </div>
                        <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-medium border border-accent/20 hover:border-accent/50 transition-all hover:bg-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3 pt-6">
                    <button className="flex-1 group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-px transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                      <div className="bg-background px-6 py-3 rounded-[11px] flex items-center justify-center gap-2 group-hover/btn:bg-background/50 transition-all">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="font-semibold text-white">View Project</span>
                      </div>
                    </button>
                    <button className="p-3 rounded-xl border border-border hover:border-accent/50 hover:bg-accent/10 transition-all">
                      <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-foreground/70 mb-8 text-lg">Want to explore more innovative projects?</p>
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
