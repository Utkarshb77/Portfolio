'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-5">
              Utkarsh Baghel
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Full-Stack Developer & ML Enthusiast building elegant web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['about', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="text-muted-foreground hover:text-primary transition-colors capitalize text-sm"
                >
                  {section}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com/Utkarshb77' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/utkarsh-baghel-456375290/' },
                { name: 'LeetCode', url: 'https://leetcode.com/u/utkarshbaghel77/' },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                >
                  {link.name}
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Utkarsh Baghel. All rights reserved.
          </p>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            aria-label="Scroll to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
