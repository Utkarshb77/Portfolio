'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Perspective grid floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60%] opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />
    </div>
  )
}

function GlowOrbs() {
  return (
    <>
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-600/[0.08] blur-[100px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-violet-600/[0.06] blur-[100px]"
      />
      <motion.div 
        animate={{ 
          x: [0, 20, -10, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[30%] w-[250px] h-[250px] rounded-full bg-cyan-500/[0.04] blur-[80px]"
      />
    </>
  )
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      const speed = isDeleting ? 40 : 80
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  )
}

function FloatingCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-12 right-8 hidden lg:block"
    >
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="bg-[#0d1117]/80 backdrop-blur-md border border-white/[0.06] rounded-xl p-5 font-mono text-[13px] leading-6 shadow-2xl shadow-black/40 max-w-[340px]"
      >
        <div className="flex gap-1.5 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div>
          <span className="text-violet-400">const</span>{' '}
          <span className="text-blue-300">developer</span>{' '}
          <span className="text-foreground/50">=</span>{' '}
          <span className="text-amber-300">{'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-cyan-300">name</span>
          <span className="text-foreground/50">: </span>
          <span className="text-emerald-400">&apos;Utkarsh&apos;</span>
          <span className="text-foreground/50">,</span>
        </div>
        <div className="pl-4">
          <span className="text-cyan-300">stack</span>
          <span className="text-foreground/50">: </span>
          <span className="text-amber-300">[</span>
          <span className="text-emerald-400">&apos;React&apos;</span>
          <span className="text-foreground/50">, </span>
          <span className="text-emerald-400">&apos;Node&apos;</span>
          <span className="text-foreground/50">, </span>
          <span className="text-emerald-400">&apos;MongoDB&apos;</span>
          <span className="text-amber-300">]</span>
          <span className="text-foreground/50">,</span>
        </div>
        <div className="pl-4">
          <span className="text-cyan-300">passion</span>
          <span className="text-foreground/50">: </span>
          <span className="text-emerald-400">&apos;Building cool stuff&apos;</span>
        </div>
        <div>
          <span className="text-amber-300">{'}'}</span>
          <span className="text-foreground/50">;</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 30
        const y = (e.clientY - rect.top - rect.height / 2) / 30
        mouseX.set(x)
        mouseY.set(y)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={containerRef} className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden bg-background">
      <AnimatedGrid />
      <GlowOrbs />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-muted-foreground font-medium">Open to opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-foreground mb-2">
            Hi, I'm{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Utkarsh
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-indigo-500/40 to-purple-500/40 rounded-full origin-left -z-10"
              />
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground/60 tracking-tight mt-2">
            I build things for the web<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6 mb-8"
        >
          <span className="font-mono text-lg text-muted-foreground">
            {'> '}
            <TypewriterText texts={[
              'Full-Stack Developer',
              'MERN Stack Builder', 
              'React & Node.js',
              'ML Enthusiast',
            ]} />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed mb-10"
        >
          Developer from India who builds full-stack web apps with React, Node.js, and MongoDB. 
          Currently exploring AI integrations and shipping real products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="group px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
          >
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-border text-foreground hover:bg-white/[0.03] hover:border-white/[0.12] transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social + email row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-center gap-5 text-muted-foreground"
        >
          {[
            { label: 'GitHub', url: 'https://github.com/Utkarshb77', icon: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/utkarsh-baghel-456375290/', icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.789 0-9.707h3.554v1.375c.429-.66 1.197-1.599 2.905-1.599 2.122 0 3.714 1.388 3.714 4.374v5.557zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.952-1.71 1.181 0 1.915.754 1.94 1.71 0 .951-.759 1.71-1.977 1.71zm1.581 11.597H3.715V9.645h3.203v10.807zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="hover:text-foreground transition-colors"
              aria-label={social.label}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </motion.a>
          ))}
          <span className="w-px h-4 bg-border" />
          <span className="text-sm font-mono">utkarshbaghel18@gmail.com</span>
        </motion.div>
      </div>

      {/* Floating code block on right */}
      <FloatingCodeBlock />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
