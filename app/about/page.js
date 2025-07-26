'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="min-h-screen px-4 py-20 bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* 👋 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h1>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m Abdullah — a frontend-focused full stack developer passionate about crafting beautiful and responsive web apps. My aim is to deliver performance-driven, user-first digital experiences.
          </p>
        </motion.div>

        {/* 👨‍💻 Image + Bio */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/profile.jpg"
            alt="Abdullah's photo"
            width={200}
            height={200}
            className="rounded-full shadow-lg object-cover"
          />
          <motion.div
            className="text-lg text-gray-600 dark:text-gray-300 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>
              I specialize in building modern frontends using React and Next.js. With a strong eye for UI/UX, I love translating designs into pixel-perfect code that works across all devices.
            </p>
            <p>
              I&apos;m also comfortable with backend development — creating APIs with Next.js and connecting them to MongoDB for full-stack functionality.
            </p>
          </motion.div>
        </div>

        {/* 🛠 Skills */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">Skills & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Next.js',
              'Tailwind CSS',
              'MongoDB',
              'Express.js',
              'Git',
              'Git Hub',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



