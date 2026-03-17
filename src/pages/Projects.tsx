import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Is it Tuesday yet?',
    category: 'Web Application',
    description: 'A minimalist web application that answers the age-old question.',
    image: '/isittuesdayyet.png',
    url: 'https://isittuesdayyet.netlify.app/'
  },
  {
    title: 'Doneify',
    category: 'Productivity Tool',
    description: 'A premium productivity platform designed for high-performance teams.',
    image: '/doneify.png',
    url: 'https://luvyasavaria.github.io/doneify/'
  }
];

export default function Projects() {
  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Our Work</h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            Explore our portfolio of premium digital experiences crafted with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] mb-6 md:mb-8 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black scale-50 group-hover:scale-100 transition-transform">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-3 font-semibold">{project.category}</p>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
