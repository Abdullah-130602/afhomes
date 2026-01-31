'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Aldar',
      logo: '/assets/developers/Aldar.png',
    },
    {
      id: 2,
      name: 'Azizi',
      logo: '/assets/developers/Azizi.png',
    },
    {
      id: 3,
      name: 'Binghatti',
      logo: '/assets/developers/Binghatti.png',
    },
    {
      id: 4,
      name: 'DAMAC',
      logo: '/assets/developers/DAMAC.png',
    },
    {
      id: 5,
      name: 'Ellington',
      logo: '/assets/developers/Ellington.png',
    },
    {
      id: 6,
      name: 'Emaar',
      logo: '/assets/developers/Emaar.png',
    },
    {
      id: 7,
      name: 'IDFC',
      logo: '/assets/developers/idbfieDkRD_logos.jpeg',
    },
    {
      id: 8,
      name: 'Meraas',
      logo: '/assets/developers/Meraas.png',
    },
    {
      id: 9,
      name: 'Nakheel',
      logo: '/assets/developers/Nakheel.png',
    },
    {
      id: 10,
      name: 'OMNIYAT',
      logo: '/assets/developers/OMNIYAT.png',
    },
    {
      id: 11,
      name: 'Sobha',
      logo: '/assets/developers/Sobha.png',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work with the most renowned developers in the UAE to bring you the best properties and opportunities
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 h-full flex items-center justify-center">
                <div className="relative w-full h-24 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate-600 text-lg">
            Trusted by leading developers across the Middle East
          </p>
        </motion.div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default Partners
