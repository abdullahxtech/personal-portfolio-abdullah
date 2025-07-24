'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Moon, Sun } from "lucide-react";
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setTheme } = useTheme()

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0f0f0f]/60 shadow-md border-b border-gray-200 dark:border-gray-800 transition"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Abdullah.dev
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 justify-center items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="hover:text-blue-500 transition"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="https://github.com/abdullahxtech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FaGithub size={20} />
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>





                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="block hover:text-blue-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className='flex gap-3 items-center justify-around'>
                        <Link
                            href="https://github.com/abdullahxtech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            <FaGithub size={20} />
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
