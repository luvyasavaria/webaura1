import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Let's talk <br /> about you.</h1>
            <p className="text-white/50 text-xl mb-16 leading-relaxed max-w-md">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Email us</p>
                  <p className="text-white font-semibold">luvyasavaria@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Live Chat</p>
                  <p className="text-white font-semibold">Available Mon-Fri, 9am-6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem]"
          >
            <form 
              action="https://formspree.io/f/4aac337c9937431498e2ddf5b9aade72" 
              method="POST"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Project Type</label>
                <select 
                  name="projectType"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/40 transition-colors appearance-none"
                >
                  <option className="bg-black">Website Design</option>
                  <option className="bg-black">UI/UX Design</option>
                  <option className="bg-black">E-commerce</option>
                  <option className="bg-black">Custom Project</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
