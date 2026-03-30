'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> 
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-foreground/70 text-balance">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-12 text-purple-300">Get in Touch</h3>
              
              {/* Email */}
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Email</h4>
                  <p className="text-foreground/70">utkarshbaghel18@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Location</h4>
                  <p className="text-foreground/70">Agra , India</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <svg className="h-6 w-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-white">Available for</h4>
                  <p className="text-foreground/70">Freelance & Full-time Projects</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-foreground/70 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {/* <a href="#" className="w-12 h-12 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20v-7.21H5.33V9.25h2.96V7.69c0-2.92 1.78-4.51 4.39-4.51 1.25 0 2.32.09 2.63.13v3.05h-1.81c-1.42 0-1.7.67-1.7 1.66V9.25h3.42l-.44 3.54h-2.98V20z" />
                  </svg>
                </a> */}
                {/* <a href="#" className="w-12 h-12 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                  </svg>
                </a> */}
                <a href="https://github.com/Utkarshb77" className="w-12 h-12 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/utkarsh-baghel-456375290/" className="w-12 h-12 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.789 0-9.707h3.554v1.375c.429-.66 1.197-1.599 2.905-1.599 2.122 0 3.714 1.388 3.714 4.374v5.557zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.952-1.71 1.181 0 1.915.754 1.94 1.71 0 .951-.759 1.71-1.977 1.71zm1.581 11.597H3.715V9.645h3.203v10.807zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-lg border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-5 h-5 text-foreground/70 group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm11.5 1.5H7.8c-2.5 0-4.3 1.8-4.3 4.3v8.4c0 2.5 1.8 4.3 4.3 4.3h8.4c2.5 0 4.3-1.8 4.3-4.3V7.8c0-2.5-1.8-4.3-4.3-4.3z" />
                    <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
                    <circle cx="18.5" cy="5.5" r="1.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gradient-to-br from-purple-500/5 to-purple-600/5 backdrop-blur border border-purple-500/20 rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-8 text-purple-300">Send a Message</h3>
            <p className="text-foreground/70 mb-8">I&apos;ll get back to you as soon as possible!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-foreground placeholder-foreground/40"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-foreground placeholder-foreground/40"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold mb-3 text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all text-foreground placeholder-foreground/40 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-accent to-purple-500 hover:from-accent/90 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm font-semibold">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
