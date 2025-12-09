import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwY2xvc2V1cHxlbnwxfHx8fDE3NjUxODk2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Burger'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2NTI1OTc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Pizza'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1712286928542-17af515d3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBjaGlja2VuJTIwd2luZ3N8ZW58MXx8fHwxNzY1MjU4NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wings'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1639744210631-209fce3e256c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FkZWQlMjBmcmllcyUyMGZvb2R8ZW58MXx8fHwxNzY1MjY2NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Loaded Fries'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1764471443859-a997da49b4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBidXJnZXIlMjBwYXR0eXxlbnwxfHx8fDE3NjUyNjY0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Cheeseburger'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1716068107414-fad614ac83a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9vZCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY1MTcxNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Restaurant'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="text-white">FOOD </span>
            <span className="text-[#F2A624]">GALLERY</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual feast of our most delicious creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#F2A624]/0 group-hover:bg-[#F2A624]/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
