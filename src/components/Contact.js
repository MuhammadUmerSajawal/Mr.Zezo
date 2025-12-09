import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="text-white">GET IN </span>
            <span className="text-[#F2A624]">TOUCH</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to order? Reach out to us and satisfy your cravings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2A624] rounded-full mb-4">
              <Phone size={28} className="text-black" />
            </div>
            <h3 className="text-xl text-white mb-2">Phone</h3>
            <a
              href="tel:03507413451"
              className="text-gray-400 hover:text-[#F2A624] transition-colors"
            >
              03507413451
            </a>
            <br />
            <a
              href="tel:01208-877778"
              className="text-gray-400 hover:text-[#F2A624] transition-colors"
            >
              01208-877778
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2A624] rounded-full mb-4">
              <MapPin size={28} className="text-black" />
            </div>
            <h3 className="text-xl text-white mb-2">Location</h3>
            <p className="text-gray-400">
              Pizza & Burger House
              <br />
              Find us on Instagram
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2A624] rounded-full mb-4">
              <Clock size={28} className="text-black" />
            </div>
            <h3 className="text-xl text-white mb-2">Hours</h3>
            <p className="text-gray-400">
              Daily: 12:00 PM - 12:00 AM
              <br />
              Open 7 days a week
            </p>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-[#1a1a1a] p-8 rounded-lg text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F2A624] rounded-full mb-4">
              <Instagram size={28} className="text-black" />
            </div>
            <h3 className="text-xl text-white mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/mrzezopizzaburger/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F2A624] transition-colors"
            >
              @mrzezopizzaburger
            </a>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#F2A624] to-[#d89520] p-12 rounded-2xl">
            <h3 className="text-4xl text-black mb-4">
              Hungry? Order Now!
            </h3>
            <p className="text-black/80 mb-8 text-lg">
              Call us or visit our Instagram to place your order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:03507413451"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-[#F2A624] px-8 py-4 rounded-full text-lg hover:bg-[#1a1a1a] transition-colors"
              >
                Call to Order
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mrzezopizzaburger/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-[#F2A624] px-8 py-4 rounded-full text-lg hover:bg-[#1a1a1a] transition-colors"
              >
                View on Instagram
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
