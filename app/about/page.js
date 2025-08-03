import React from 'react';
import { ExternalLink, Mail, Github, Linkedin, BarChart3, Globe, Shield, Zap, User, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Page = () => {
  const techStack = [
    "React", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Vercel", "Git"
  ];

  const features = [
    {
      title: "URL Shortening",
      description: "Convert long URLs into short, shareable links with custom codes",
      icon: <ExternalLink className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics",
      description: "Track clicks, views, and performance with detailed insights",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Geolocation Tracking",
      description: "Monitor click locations worldwide with interactive maps",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Secure Authentication",
      description: "Protected user sessions with NextAuth.js integration",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance with instant URL generation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "User Dashboard",
      description: "Personal analytics dashboard with link management",
      icon: <User className="w-6 h-6" />
    }
  ];

  const projectStats = [
    { label: "Tech Stack", value: "13+", icon: <Database className="w-5 h-5" /> },
    { label: "Features", value: "15+", icon: <Zap className="w-5 h-5" /> },
    { label: "API Endpoints", value: "8", icon: <ExternalLink className="w-5 h-5" /> },
    { label: "Real-time", value: "100%", icon: <BarChart3 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center shadow-2xl shadow-black/50 dark:shadow-white/50">
            <Image
              src="/sprofile.png"
              alt="Profile"
              width="120"
              height="120"
              className='rounded-full w-30 h-30 object-cover'
            />
          </div>
          <h1 className="font-black text-5xl md:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark:from-white/50 dark:to-white/15 inline-block">
            Pir Salman Shah
          </h1>
          <p className="text-xl md:text-2xl font-medium text-black/50 dark:text-white/50 mb-8 max-w-3xl mx-auto">
            {`Full Stack MERN & Next.js Developer crafting modern web experiences with cutting-edge technologies`}
          </p>
        
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Tech Stack */}
        <section>
          <h2 className="font-black text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark:from-white/50 dark:to-white/15 inline-block w-full">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
            {techStack.map((tech) => (
              <div key={tech} className="group">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-4 shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <span className="text-sm font-medium text-center block text-black/50 dark:text-white/50 group-hover:text-black/70 dark:group-hover:text-white/70 transition-colors duration-200">
                    {tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="font-black text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark:from-white/50 dark:to-white/15 inline-block w-full">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="group">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-6 shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 backdrop-blur-2xl bg-black/10 dark:bg-white/10 rounded-xl text-black/70 dark:text-white/70 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300">
                      {`${feature.icon}`}
                    </div>
                    <h3 className="text-xl font-semibold text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                      {`${feature.title}`}
                    </h3>
                  </div>
                  <p className="text-black/50 dark:text-white/50 leading-relaxed">
                    {`${feature.description}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Stats */}
        <section>
          <h2 className="font-black text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark:from-white/50 dark:to-white/15 inline-block w-full">
            Project Stats
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-6 text-center shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 backdrop-blur-2xl bg-black/10 dark:bg-white/10 rounded-xl text-black/70 dark:text-white/70 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300">
                      {`${stat.icon}`}
                    </div>
                  </div>
                  <div className="text-3xl font-black text-black/70 dark:text-white/70 mb-2">
                    {`${stat.value}`}
                  </div>
                  <div className="text-black/50 dark:text-white/50 font-medium">
                    {`${stat.label}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-black text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-black/50 to-black/15 dark:from-white/50 dark:to-white/15 inline-block w-full">
            {`Let's Connect`}
          </h2>
          <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50 dark:shadow-white/50">
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="mailto:pirslmanshahh@gmail.com" className="group">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-6 shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <div className="flex flex-col sm:flex-row items-center space-x-4">
                    <div className="p-3 backdrop-blur-2xl bg-red-500/20 dark:bg-red-400/20 rounded-xl text-red-600 dark:text-red-400 group-hover:bg-red-500/30 dark:group-hover:bg-red-400/30 transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-black/70 dark:text-white/70">Email</h3>
                      <p className="text-black/50 dark:text-white/50 text-sm">{`pirslmanshahh@gmail.com`}</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://github.com/PirSalmanShah" className="group" target="_blank" rel="noopener noreferrer">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-6 shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <div className="flex flex-col sm:flex-row  items-center space-x-4">
                    <div className="p-3 backdrop-blur-2xl bg-black/10 dark:bg-white/10 rounded-xl text-black/70 dark:text-white/70 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-black/70 dark:text-white/70">GitHub</h3>
                      <p className="text-black/50 dark:text-white/50 text-sm">PirSalmanShah</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://www.linkedin.com/in/pirslmanshah/" className="group" target="_blank" rel="noopener noreferrer">
                <div className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 rounded-2xl p-6 shadow-2xl shadow-black/50 dark:shadow-white/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-black/70 dark:hover:shadow-white/70">
                  <div className="flex flex-col sm:flex-row items-center space-x-4">
                    <div className="p-3 backdrop-blur-2xl bg-blue-500/20 dark:bg-blue-400/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/30 dark:group-hover:bg-blue-400/30 transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-black/70 dark:text-white/70">LinkedIn</h3>
                      <p className="text-black/50 dark:text-white/50 text-sm">pirslmanshah</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="backdrop-blur-2xl bg-black/5 dark:bg-white/5 py-8 shadow-2xl shadow-black/50 dark:shadow-white/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-black/50 dark:text-white/50">
            {`© 2024 Pir Salman Shah. Crafted with ❤️ using React & Tailwind CSS`}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;