import { useState } from 'react';
import { motion } from 'motion/react';
import { MenuItem } from './MenuItem';

const menuData = {
  burgers: [
    {
      id: 1,
      name: 'Signature Boxer',
      description: 'A beef patty loaded with special sauce',
      price: 'EGP 120',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    },
    {
      id: 2,
      name: 'Grilled Burger',
      description: 'The jalapeño combo with grilled beef',
      price: 'EGP 110',
      image: 'https://images.unsplash.com/photo-1764471443859-a997da49b4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 3,
      name: 'Classic Cheeseburger',
      description: 'Juicy beef patty with melted cheese',
      price: 'EGP 95',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 4,
      name: 'Double Trouble',
      description: 'Two beef patties with all the fixings',
      price: 'EGP 150',
      image: 'https://images.unsplash.com/photo-1764471443859-a997da49b4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    }
  ],
  pizza: [
    {
      id: 5,
      name: 'Beefy Extreme Pizza',
      description: 'Meat loaded, eat and repeat!',
      price: 'EGP 180',
      image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    },
    {
      id: 6,
      name: 'Margherita Classic',
      description: 'Fresh mozzarella, basil, and tomato sauce',
      price: 'EGP 120',
      image: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    }
  ],
  wings: [
    {
      id: 7,
      name: 'Flaming Wings',
      description: 'Spice that strikes!',
      price: 'EGP 90',
      image: 'https://images.unsplash.com/photo-1712286928542-17af515d3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    }
  ],
  sides: [
    {
      id: 8,
      name: 'Loaded Fries',
      description: 'Crispy fries loaded with cheese and toppings',
      price: 'EGP 50',
      image: 'https://images.unsplash.com/photo-1639744210631-209fce3e256c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    }
  ]
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('burgers');

  const categories = [
    { id: 'burgers', label: 'Burgers' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'wings', label: 'Wings' },
    { id: 'sides', label: 'Sides' }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="text-white">OUR </span>
            <span className="text-[#F2A624]">MENU</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our signature dishes crafted with passion and served with love
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-[#F2A624] text-black'
                  : 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {menuData[activeCategory].map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
