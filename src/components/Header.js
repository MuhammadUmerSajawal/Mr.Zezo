import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import logo from '../assets/logo.png'; 

export function Header({ mobileMenuOpen, setMobileMenuOpen, activeSection }) {
  const navItems = ['Home', 'Menu', 'Gallery', 'Contact'];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#F2A624]/20 will-change-transform"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              href="#home"
              onClick={() => {
                setMobileMenuOpen(false);
                // Ensure smooth scroll to top even if the browser ignores anchor smooth behavior
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img src={logo} alt="Mr Zezo" className="h-16 w-16" />
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className={`relative pb-1 ${
                    activeSection === item.toLowerCase()
                      ? 'text-[#F2A624] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[#F2A624]'
                      : 'text-white hover:text-[#F2A624]'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="tel:03507413451"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="flex items-center gap-2 text-white hover:text-[#F2A624]"
              >
                <Phone size={20} />
                <span>03507413451</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/mrzezopizzaburger/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="bg-[#F2A624] text-black px-6 py-2 rounded-full"
              >
                Order Now
              </motion.a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black md:hidden will-change-transform"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl ${
                      isActive ? 'text-[#F2A624]' : 'text-white hover:text-[#F2A624]'
                    }`}
                  >
                    {item}
                  </motion.a>
                );
              })}

              <motion.a
                href="https://www.instagram.com/mrzezopizzaburger/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F2A624]"
              >
                <Instagram size={24} />
                <span>@mrzezopizzaburger</span>
              </motion.a>

              <motion.a
                href="tel:03507413451"
                className="bg-[#F2A624] text-black px-8 py-3 rounded-full text-xl"
              >
                Order Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
