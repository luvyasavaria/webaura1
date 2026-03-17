import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    price: '3000rs',
    description: 'Perfect for startups and small businesses looking for a premium presence.',
    features: [
      'Custom 5-Page Website',
      'Mobile Responsive Design',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '2 Rounds of Revisions',
      '1 Month Support'
    ]
  },
  {
    name: 'Pro',
    price: '5000rs',
    description: 'Ideal for growing brands that need more features and customization.',
    features: [
      'Custom 10-Page Website',
      'Advanced UI/UX Design',
      'Full SEO Strategy',
      'CMS Integration',
      'Custom Animations',
      '3 Months Support',
      'Performance Optimization'
    ],
    popular: true
  },
  {
    name: 'Custom',
    price: 'Custom',
    description: 'Tailored solutions for complex projects and enterprise needs.',
    features: [
      'Unlimited Pages',
      'E-commerce Functionality',
      'Custom Web Applications',
      'Priority Support',
      'Dedicated Project Manager',
      'Ongoing Maintenance',
      'API Integrations'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Simple Pricing</h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for premium results. Choose the plan that best fits your brand's needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border flex flex-col ${
                tier.popular 
                ? 'bg-white text-black border-white' 
                : 'bg-white/[0.03] text-white border-white/10'
              }`}
            >
              {tier.popular && (
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 block">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className={`text-sm ${tier.popular ? 'text-black/50' : 'text-white/40'}`}>/project</span>}
              </div>
              <p className={`text-sm mb-10 leading-relaxed ${tier.popular ? 'text-black/60' : 'text-white/50'}`}>
                {tier.description}
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <Check size={16} className={tier.popular ? 'text-black' : 'text-white/40'} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-4 text-center font-bold rounded-2xl transition-all ${
                  tier.popular 
                  ? 'bg-black text-white hover:bg-black/90' 
                  : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
