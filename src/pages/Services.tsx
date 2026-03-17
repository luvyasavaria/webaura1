import { motion } from 'motion/react';
import { Layout, Palette, Zap, Globe, Code, Layers } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Website Design',
    description: 'We create visually stunning websites that align perfectly with your brand identity and business goals.'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centric interfaces designed to provide seamless experiences and drive meaningful engagement.'
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Landing Pages',
    description: 'High-conversion landing pages optimized for performance and designed to capture your audience.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance Optimization',
    description: 'We ensure your site is lightning fast, SEO-friendly, and accessible across all devices.'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Projects',
    description: 'Unique digital solutions tailored to your specific needs, from complex web apps to interactive tools.'
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Brand Strategy',
    description: 'Developing a cohesive digital strategy that elevates your brand and sets you apart from the competition.'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Our Services</h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all group"
            >
              <div className="text-white mb-8 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
