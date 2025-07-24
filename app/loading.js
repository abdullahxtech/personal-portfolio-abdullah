// app/loading.js
'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0f0f0f]">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 1,
        }}
      />
      <motion.p
        className="mt-6 text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        Loading portfolio...
      </motion.p>
    </div>
  );
}
