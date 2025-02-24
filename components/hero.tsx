"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Supercharge Your Business with AI
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Choose from our suite of intelligent agents and transform your workflow today
        </motion.p>
        <motion.a
          href="https://api.whatsapp.com/send?phone=18605404520"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.a>
      </div>
    </div>
  )
}

