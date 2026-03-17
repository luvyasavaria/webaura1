import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Crafting Digital <br /> Excellence.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <p className="text-white/70 text-xl leading-relaxed">
              WebAura was founded on a simple premise: premium digital experiences shouldn't be reserved only for the world's largest corporations. We believe that every brand deserves a website that reflects its true value.
            </p>
            <p className="text-white/50 text-xl leading-relaxed">
              Our team of designers and developers work at the intersection of art and technology, creating digital products that are not only visually stunning but also highly functional and performance-driven.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { label: 'Founded', value: '2026' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Happy Clients', value: '100%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center"
            >
              <h3 className="text-5xl font-bold mb-4">{stat.value}</h3>
              <p className="text-white/40 uppercase tracking-widest text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <p className="text-white/40 uppercase tracking-widest text-sm font-bold mb-4">The Visionary</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Founded by Luvya Savaria</h2>
          <a 
            href="https://www.instagram.com/luvya.html_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all"
          >
            Follow on Instagram
          </a>
        </motion.div>



        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-xl leading-relaxed"
          >
            To democratize premium design by providing high-end digital solutions that are accessible, effective, and built to last. We don't just build websites; we build the future of your brand.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
