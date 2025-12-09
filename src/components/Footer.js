import { motion } from 'motion/react';
import { Instagram, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#F2A624]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <motion.a
              href="#home"
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block"
            >
              <img src={logo} alt="Mr Zezo" className="h-20 w-20 mb-4 cursor-pointer drop-shadow-lg" />
            </motion.a>
            <p className="text-gray-400">
              Mr Zezo Pizza & Burger House - Where flavor meets passion. Serving the best burgers, pizzas, and wings in town.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F2A624] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#F2A624] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#F2A624] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#F2A624] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#F2A624] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F2A624] mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:03507413451" className="hover:text-[#F2A624] transition-colors">
                  03507413451
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:01208-877778" className="hover:text-[#F2A624] transition-colors">
                  01208-877778
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Instagram size={18} />
                <a
                  href="https://www.instagram.com/mrzezopizzaburger/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2A624] transition-colors"
                >
                  @mrzezopizzaburger
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F2A624]/20 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mr Zezo Pizza & Burger House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
