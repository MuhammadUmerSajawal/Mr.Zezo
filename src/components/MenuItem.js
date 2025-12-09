import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer relative"
    >
      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-4 right-4 z-10 bg-[#F2A624] text-black px-3 py-1 rounded-full text-sm">
          Popular
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-2 group-hover:text-[#F2A624] transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[#F2A624] text-xl">
            {item.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#F2A624] text-black p-2 rounded-full"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
