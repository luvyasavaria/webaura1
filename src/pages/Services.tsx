import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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

function ServiceCard({ service, index, total, scrollYProgress }: {
  service: typeof services[0];
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  // Each card slides in from right and exits to the left
  const x = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, end, Math.min(1, end + 1 / total)],
    ['100%', '0%', '0%', '-100%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, end, Math.min(1, end + 1 / total)],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, end, Math.min(1, end + 1 / total)],
    [0.85, 1, 1, 0.85]
  );

  return (
    <motion.div
      style={{ x, opacity, scale }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-2xl p-10 md:p-16 rounded-[2rem] md:rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all group">
        <div className="text-white mb-8 group-hover:scale-110 transition-transform origin-left">
          {service.icon}
        </div>
        <div className="text-white/30 text-sm uppercase tracking-widest mb-4 font-bold">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h3>
        <p className="text-white/50 text-lg leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div className="bg-black">
      {/* Header — scrolls normally */}
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Our Services</h1>
          <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
          </p>
        </motion.div>
      </div>

      {/* Scroll hijack section */}
      <div
        ref={containerRef}
        style={{ height: `${services.length * 100}vh` }}
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

          {/* Progress dots */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
            {services.map((_, i) => {
              const dotProgress = useTransform(
                scrollYProgress,
                [(i / services.length), ((i + 0.5) / services.length)],
                [0, 1]
              );
              return (
                <motion.div
                  key={i}
                  style={{ scaleY: dotProgress }}
                  className="w-1 h-6 bg-white rounded-full origin-top opacity-40"
                />
              );
            })}
          </div>

          {/* Cards */}
          <div className="relative w-full h-full">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                service={service}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
