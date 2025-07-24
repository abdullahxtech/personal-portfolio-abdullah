'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="px-4 py-20 min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question, project idea, or just want to say hello? Drop me a message below!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission isn't hooked up yet. You can use Formspree, EmailJS, or backend.");
          }}
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          className="flex justify-center gap-6 pt-6 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="https://github.com/abdullahxtech/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-600 transition" />
          </Link>
          <Link href="https://twitter.com/Abdullah1192916" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-600 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdullah-dev2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


