'use client'

import { motion } from 'framer-motion'

export default function About() {
  const expertise = [
    {
      id: 1,
      title: 'Frontend Architecture',
      description: 'I love crafting clean and fast interfaces. I mostly work with React and Tailwind to bring designs exactly to life in the browser.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
      techs: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    },
    {
      id: 2,
      title: 'Backend Engineering',
      description: 'I build the behind-the-scenes logic that powers apps. From setting up APIs to managing databases, I make sure everything runs smoothly without a hitch.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.027-.396.05-.6.075m-.6-1.15c-.172.02-.346.039-.522.057m0 2.22c-.172.02-.346.039-.522.057M12 10.5V15m0 0-3-3m3 3 3-3" />
        </svg>
      ),
      techs: ['Node.js', 'MongoDB', 'Express', 'Java'],
    },
    {
      id: 3,
      title: 'Data Analytics & AI',
      description: "I enjoy digging into data to find interesting patterns. Lately, I've been very focused on wiring up machine learning models into real-world applications.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      ),
      techs: ['Python', 'Pandas', 'TensorFlow', 'Data Mining'],
    },
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
      {/* Remove giant blurry color blobs for a clean minimal layout, just use a subtle structural glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
            My <span className="text-primary/90">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            I'm a full-stack developer who loves building things for the web. I really enjoy piecing together both the visual side and the backend logic.
          </p>
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
              whileHover={{ y: -5 }}
              key={item.id}
              className="group bg-card/20 border border-border backdrop-blur-sm rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-card/40"
            >
              {/* Subtle top primary highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300" />
              
              <div className="relative z-10 flex-grow flex flex-col">
                {/* Minimalist Icon */}
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-8 p-3 bg-background rounded-2xl w-max border border-border group-hover:border-primary/20 shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Tech Tags: Sleek wireframe tags */}
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
