"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden transition hover:shadow-lg border dark:border-[#333]"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
        priority
      />

      <div className="p-4 space-y-3 flex flex-col justify-between h-[calc(100%-12rem)]">
        <div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
        </div>

        <div className="flex gap-3 mt-4">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow"
            >
              🌐 Live
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-md bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors shadow flex gap-2"
            >
              <FaGithub size={20} />
              <span>
                GitHub
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
