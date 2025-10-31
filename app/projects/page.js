"use client"
import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects.js';

const Page = () => {
    const liveProjects = projects.filter(p => p.type === 'live');
    const githubOnly = projects.filter(p => p.type === 'github');

    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all'); // all | live | github

    // 🔍 Search + Filter Logic
    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            project.title.toLowerCase().includes(query) ||
            (project.tech || []).join(' ').toLowerCase()


        const matchesFilter =
            activeFilter === 'all'
                ? true
                : activeFilter === 'live'
                    ? !!project.live
                    : !project.live;


        return matchesSearch && matchesFilter;
    });

    return (
        <section className="min-h-screen px-4 py-20 bg-gray-50 dark:bg-[#0f0f0f] text-black dark:text-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>

                {/* 🔍 Search Input */}
                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by name or tech..."
                        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-10">
                    {['all', 'live', 'github'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full border text-sm transition ${activeFilter === filter
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-[#1c1c1c] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white'
                                }`}
                        >
                            {filter === 'all' && 'All'}
                            {filter === 'live' && 'Live'}
                            {filter === 'github' && 'GitHub Only'}
                        </button>
                    ))}
                </div>

                {/* Project Cards Grid */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No matching projects found.</p>
                )}
            </div>
        </section>
    )
}

export default Page



