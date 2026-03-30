export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Full-Stack Developer & ML Enthusiast
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Utkarsh Baghel
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Full-stack developer passionate about building scalable applications with React, Next.js, and Node.js. 
          I combine strong ML fundamentals with software engineering expertise, and also proficient in Java development. 
          Turning ideas into elegant, high-performance solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Projects
          </button>
          <button className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z text-white" />
            </svg>
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
            <p className="text-foreground/60 text-sm">Projects Built</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
            <p className="text-foreground/60 text-sm">Technologies</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-pink-400 mb-1">3+</div>
            <p className="text-foreground/60 text-sm">Languages</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-400 mb-1">ML</div>
            <p className="text-foreground/60 text-sm">Expertise</p>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
