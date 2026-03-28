import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { 
    stiffness: 120, 
    damping: 28, 
    mass: 0.15 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]?.target.id) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ scaleX: progress }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="group relative text-2xl font-semibold tracking-tighter"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                Sharat.
              </span>
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                    
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Hover underline effect */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 hover:w-full" />
                  </a>
                );
              })}

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1uTY0w8l9ayhY6BN0Lpyy7NGOpfBuY-rq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative z-10">Resume</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-3 text-white backdrop-blur-xl transition-all hover:bg-slate-800 md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl"
            >
              <div className="flex flex-col px-6 py-8 gap-2">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`rounded-2xl px-5 py-4 text-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white border border-cyan-500/30' 
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <a
                  href="https://drive.google.com/file/d/1uTY0w8l9ayhY6BN0Lpyy7NGOpfBuY-rq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-center text-lg font-medium text-white shadow-lg"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};