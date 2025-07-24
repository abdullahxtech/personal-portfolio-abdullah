'use client';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200 py-10 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Abdullah</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <Link href="https://github.com/abdullahxtech/" target="_blank">
            <FaGithub className="hover:text-blue-600 transition" />
          </Link>
          <Link href="https://twitter.com/Abdullah1192916" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-600 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdullah-dev2/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
