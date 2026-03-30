'use client'

export default function About() {
  const expertise = [
    {
      id: 1,
      title: 'Frontend Architecture',
      description: 'Building responsive, pixel-perfect web applications with a focus on performance and accessibility.',
      icon: '🎨',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      gradient: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-500/30',
      tagBg: 'bg-blue-500/20',
      tagText: 'text-blue-300'
    },
    {
      id: 2,
      title: 'Backend Engineering',
      description: 'Designing robust APIs and database schemas that scale securely and efficiently.',
      icon: '⚙️',
      techs: ['Node.js', 'MongoDB', 'Express', 'REST APIs', 'Java'],
      gradient: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-500/30',
      tagBg: 'bg-purple-500/20',
      tagText: 'text-purple-300'
    },
    {
      id: 3,
      title: 'Data Analytics & AI',
      description: 'Transforming raw data into actionable insights and integrating AI solutions into web applications.',
      icon: '📊',
      techs: ['Python', 'Pandas', 'Machine Learning', 'Scikit-Learn', 'Data Analysis'],
      gradient: 'from-pink-500/10 to-pink-600/10',
      borderColor: 'border-pink-500/30',
      tagBg: 'bg-pink-500/20',
      tagText: 'text-pink-300'
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Expertise
          </h2>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {expertise.map((item) => (
            <div
              key={item.id}
              className={`group bg-gradient-to-br ${item.gradient} border ${item.borderColor} rounded-2xl p-8 hover:${item.borderColor} transition-all duration-300 hover:shadow-lg hover:shadow-accent/20`}
            >
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 ${item.tagBg} ${item.tagText} text-xs font-semibold rounded-full border transition-all`}
                    style={{ borderColor: item.tagBg.replace('bg-', 'border-').replace('/20', '/30') }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-foreground/70 text-sm">Projects Built</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
            <p className="text-foreground/70 text-sm">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">20+</div>
            <p className="text-foreground/70 text-sm">Happy Clients</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <p className="text-foreground/70 text-sm">Languages</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}
