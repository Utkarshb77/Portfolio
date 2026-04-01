export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-5">
              Portfolio
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Building beautiful digital experiences with modern technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.linkedin.com/in/utkarsh-baghel-456375290/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://github.com/Utkarshb77" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="https://leetcode.com/u/utkarshbaghel77/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LeetCode</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Utkarsh Baghel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
