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
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;

  // Incoming: rotates from +90deg to 0deg (flips in from front)
  // Outgoing: rotates from 0deg to -90deg (flips out to back)
  const rotateY = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, mid, end],
    [90, 0, 0, -90]
  );

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, mid, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, mid, end],
    [0.7, 1, 1, 0.7]
  );

  const z = useTransform(
    scrollYProgress,
    [Math.max(0, start - 1 / total), start, mid, end],
    [-200, 0, 0, -200]
  );

  return (
    <motion.div
      style={{
        rotateY,
        opacity,
        scale,
        z,
        transformStyle: 'preserve-3d',
      }}
      className="absolute inset-0 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-2xl">
        {/* Card front face */}
        <div className="relative p-10 md:p-16 rounded-[2rem] md:rounded-3xl border border-white/10 overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            boxShadow: '0 0 80px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Glowing orb behind card */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent)' }}
          />

          {/* Index number */}
          <div className="text-white/10 text-8xl font-black absolute top-6 right-8 select-none leading-none">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Icon */}
          <div className="text-white mb-8 group-hover:scale-110 transition-transform origin-left relative z-10">
            {service.icon}
          </div>

          {/* Counter */}
          <div className="text-white/30 text-xs uppercase tracking-widest mb-4 font-bold relative z-10">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{service.title}</h3>

          {/* Description */}
          <p className="text-white/50 text-lg leading-relaxed relative z-10 max-w-lg">{service.description}</p>

          {/* Bottom line accent */}
          <div className="mt-10 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent relative z-10" />
        </div>
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
      {/* Header */}
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

      {/* 3D Flip scroll section */}
      <div
        ref={containerRef}
        style={{ height: `${services.length * 100}vh` }}
      >
        <div
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
          style={{ perspective: '1200px' }}
        >

          {/* Progress bar — left side */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            {services.map((_, i) => {
              const active = useTransform(
                scrollYProgress,
                [(i / services.length), ((i + 0.5) / services.length)],
                [0.2, 1]
              );
              return (
                <motion.div
                  key={i}
                  style={{ opacity: active }}
                  className="w-1 h-8 bg-white rounded-full"
                />
              );
            })}
          </div>

          {/* Service name indicator — bottom center */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            {services.map((service, i) => {
              const op = useTransform(
                scrollYProgress,
                [
                  Math.max(0, (i / services.length) - 0.05),
                  i / services.length,
                  (i + 0.8) / services.length,
                  (i + 1) / services.length
                ],
                [0, 1, 1, 0]
              );
              return (
                <motion.p
                  key={i}
                  style={{ opacity: op, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
                  className="text-white/30 text-sm uppercase tracking-widest whitespace-nowrap font-bold"
                >
                  {service.title}
                </motion.p>
              );
            })}
          </div>

          {/* Cards */}
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
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
