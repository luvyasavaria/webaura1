import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/isittuesdayyet.png"
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/landingpagevid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-8"
          >
            High-end websites without <br className="hidden md:block" />
            <span className="text-white/70">high-end excuses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto font-medium"
          >
            Clean design. Smooth experience. Real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/projects"
              className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-white/50 max-w-xl text-lg">
              We specialize in creating digital products that stand out in a crowded market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Website Design', desc: 'Bespoke designs tailored to your brand identity.' },
              { title: 'UI/UX Design', desc: 'Intuitive interfaces focused on user experience.' },
              { title: 'Performance', desc: 'Lightning fast load times and SEO optimization.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
              <p className="text-white/50 max-w-xl text-lg">
                A glimpse into the premium experiences we've crafted.
              </p>
            </motion.div>
            <motion.div {...fadeInUp}>
              <Link to="/projects" className="text-white font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity">
                All Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Is it Tuesday yet?', category: 'Web Application', img: '/isittuesdayyet.png', url: 'https://isittuesdayyet.netlify.app/' },
              { title: 'Doneify', category: 'Productivity Tool', img: '/doneify.png', url: 'https://luvyasavaria.github.io/doneify/' },
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer block"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6">
                  <img
                    src={project.img}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <p className="text-white/40 text-sm uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Stories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Nitish Pandey', role: 'CEO at Lumina', text: 'WebAura transformed our digital presence. The attention to detail is unmatched.' },
              { name: 'Khushal Sahu', role: 'Founder of Aura', text: 'Professional, creative, and fast. They delivered exactly what we needed.' },
              { name: 'Atharv Mishra', role: 'Marketing Director', text: 'The best agency we have worked with. Our conversion rate increased by 40%.' },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-white/40 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6">
        <motion.div
          {...fadeInUp}
          className="max-w-5xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-black text-center"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">Ready to build something <br /> extraordinary?</h2>
          <p className="text-black/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join the ranks of premium brands that have elevated their digital presence with WebAura.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-black text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
