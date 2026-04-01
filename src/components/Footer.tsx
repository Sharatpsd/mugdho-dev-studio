import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950 py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* LEFT - BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sharat.dev
            </h3>

            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Backend-focused full-stack developer building scalable web applications 
              with Django, DRF, React, and PostgreSQL.
            </p>

            <p className="mt-3 text-xs text-emerald-400 font-medium">
              🚀 Open to Backend / Full-Stack Opportunities
            </p>
          </motion.div>

          {/* CENTER - QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>

            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Experience', href: '#experience' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 text-sm hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* RIGHT - CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h4 className="text-white font-semibold mb-2">Contact</h4>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Mail size={16} /> sharatacharjee6@gmail.com
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Phone size={16} /> +880 1783 720914
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} /> Dhaka, Bangladesh
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/Sharatpsd"
                target="_blank"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/sharat-acharjya"
                target="_blank"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:sharatacharjee6@gmail.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500">
            © {currentYear} Sharat Acharja Mugdho. All rights reserved.
          </p>

          <p className="text-xs text-slate-600">
            Built with React • Tailwind • Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};