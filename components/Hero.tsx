'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <section className="min-h-screen relative flex items-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden bg-background">
      {/* Background glow similar to image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.15),_transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.15),_transparent_40%)] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          className="flex flex-col justify-center max-w-xl pr-0 lg:pr-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-primary font-bold tracking-wide mb-4 text-base md:text-lg">
            Welcome to my portfolio!
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground text-balance">
            Hello, my <br />
            name's <span className="text-primary">Utkarsh</span>.
          </motion.h1>
           
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-balance">
            I'm a Full-Stack Developer & ML Enthusiast from India.<br/>
            Currently building scalable applications turning ideas into elegant, high-performance solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all shadow-lg shadow-primary/20"
            >
              Download cv
            </motion.button>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-border hover:border-primary/50 text-foreground rounded-full font-bold transition-all flex items-center justify-center gap-3 group"
            >
              See my work 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="mt-16 sm:mt-24 flex items-center gap-3 text-muted-foreground text-sm font-medium">
            <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <motion.div 
                className="w-1.5 h-3 bg-muted-foreground/50 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
            Scroll down
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center min-h-[500px]"
        >
          {/* Main frame shape matching reference image */}
          <div className="relative w-[320px] h-[480px] md:w-[400px] md:h-[580px] rounded-[100px] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] border-4 border-[#0f172a] bg-[#020617] group shrink-0">
            {/* Inner gradient/lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-0 shadow-[inset_0_20px_40px_rgba(0,0,0,0.6)] pointer-events-none z-20" />
            
            {/* The Avatar Image */}
            <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
              <Image 
                src="/assets/developer_avatar_1775066926178.png"
                alt="Utkarsh Baghel"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 mix-blend-lighten"
                sizes="(max-w-768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>




        </motion.div>
      </div>


    </section>
  )
}
