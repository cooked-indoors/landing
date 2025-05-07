'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div 
      className="fixed bottom-10 right-10 z-50 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <p className="text-sm font-medium mb-2 text-gray-700 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
        Scroll to explore
      </p>
      <motion.div 
        className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-gray-700 rounded-full"
          animate={{ 
            y: [0, 12, 0],
            opacity: [1, 0.5, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  )
}
