export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-purple-500/20 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-5">
              Portfolio
            </div>
            <p className="text-slate-300/90 text-base leading-relaxed">
              Building beautiful digital experiences with modern technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Quick Links</h4>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-300/85 hover:text-purple-300 transition-colors">About</a>
              <a href="#projects" className="text-slate-300/85 hover:text-purple-300 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300/85 hover:text-purple-300 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cyan-300">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/utkarsh-baghel-456375290/" className="text-slate-300/85 hover:text-purple-300 transition-colors">LinkedIn</a>
              <a href="https://github.com/Utkarshb77" className="text-slate-300/85 hover:text-purple-300 transition-colors">GitHub</a>
              <a href="https://leetcode.com/u/utkarshbaghel77/" className="text-slate-300/85 hover:text-purple-300 transition-colors">LeetCode</a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400/90 text-sm">
            © {currentYear} Utkarsh Baghel. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400/90 hover:text-cyan-300 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-slate-400/90 hover:text-cyan-300 transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
