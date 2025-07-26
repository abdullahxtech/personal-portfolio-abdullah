"use client"
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Homes = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white dark:bg-[#0f0f0f] px-4">
            {/* Text Section */}
            <div className="text-center md:text-left max-w-xl space-y-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I&apos;m Abdullah 👋
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Frontend-Focused Full Stack Developer
                </motion.h2>

                <motion.p
                    className="text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    I craft beautiful, fast, and responsive web apps with React & Next.js.
                </motion.p>

                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Link href="/projects">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                            View Projects
                        </button>
                    </Link>
                    <Link
                        href="https://github.com/abdullahxtech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-blue-600"
                    >
                        <FaGithub size={24} />
                    </Link>
                </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
                className="mt-10 md:mt-0 md:ml-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <Image
                    src="/profile.jpg"
                    alt="Abdullah"
                    width={250}
                    height={250}
                    className="rounded-full object-cover shadow-lg"
                />

            </motion.div>
        </section>
    )
}

export default Homes
