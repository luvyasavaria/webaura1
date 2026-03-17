import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
            WEBAURA<span className="text-white/40">.</span>
          </Link>
          <p className="text-white/50 max-w-sm leading-relaxed">
            Crafting high-end digital experiences for brands that refuse to settle for the ordinary.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Pages</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
        <p>© 2026 WebAura Agency. All rights reserved.</p>
        <p>Made for premiumness</p>
      </div>
    </footer>
  );
}
