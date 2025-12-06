import React from 'react';
import Card from './Card';
import ServerStatus from './ServerStatus';
import { DATA } from '../data';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Network, Database, Code, Globe, Zap, Box } from 'lucide-react';

export default function BentoGrid() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

            {/* Experience Section */}
            <section>
                <div className="flex items-center justify-between mb-8 border-l-4 border-industrial-200 pl-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-industrial-200 uppercase tracking-widest"
                    >
                        Operations Log // Experience
                    </motion.h2>
                    <div className="text-industrial-500 font-mono text-xs hidden md:block">
                        SYS.LOG.V2
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {DATA.experience.map((exp, index) => (
                        <Card
                            key={index}
                            title={exp.role}
                            subtitle={`${exp.company} | ${exp.location}`}
                            date={exp.period}
                            delay={index * 0.1}
                            icon={index % 2 === 0 ? Terminal : Database}
                        >
                            <ul className="list-none space-y-2">
                                {exp.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-industrial-500">{">"}</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Projects Section - The actual Bento Grid feel */}
            <section>
                <div className="flex items-center justify-between mb-8 border-l-4 border-industrial-200 pl-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-industrial-200 uppercase tracking-widest"
                    >
                        Schematics // Projects
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {/* Feature the first project prominently */}
                    <Card
                        title={DATA.projects[0].name}
                        subtitle={DATA.projects[0].tech}
                        className="md:col-span-2"
                        icon={Zap}
                    >
                        <ul className="list-none space-y-2 text-sm">
                            {DATA.projects[0].details.map((detail, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-industrial-500">{">"}</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 p-3 border border-industrial-700 bg-industrial-900/50">
                            <div className="flex justify-between text-xs font-mono text-industrial-400 mb-1">
                                <span>LATENCY</span>
                                <span>&lt; 50ms</span>
                            </div>
                            <div className="w-full h-1 bg-industrial-800">
                                <div className="h-full bg-industrial-200 w-[95%]"></div>
                            </div>
                        </div>
                    </Card>

                    {/* Server Status Widget */}
                    <div className="md:col-span-1">
                        <ServerStatus />
                    </div>

                    {/* Remaining Projects */}
                    {DATA.projects.slice(1).map((project, index) => (
                        <Card
                            key={index}
                            title={project.name}
                            subtitle={project.tech}
                            delay={(index + 1) * 0.1}
                            icon={Box}
                            className={index === 0 ? "md:col-span-2" : ""}
                        >
                            <ul className="list-none space-y-2">
                                {project.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-industrial-500">{">"}</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Skills & Stats */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-industrial-200 border-l-4 border-industrial-200 pl-4 uppercase tracking-widest"
                    >
                        Mainframe Stats // Skills
                    </motion.h2>
                    <div className="h-[1px] flex-grow bg-industrial-700"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-industrial-800 border border-industrial-600 p-4 sharp-edge hover:border-industrial-200 transition-colors group">
                        <h3 className="text-industrial-200 font-bold mb-2 text-xs uppercase flex items-center gap-2">
                            <Cpu size={14} /> Generative AI
                        </h3>
                        <p className="text-xs text-industrial-400 font-mono leading-relaxed group-hover:text-industrial-300">{DATA.skills.generativeAi}</p>
                    </div>
                    <div className="bg-industrial-800 border border-industrial-600 p-4 sharp-edge hover:border-industrial-200 transition-colors group">
                        <h3 className="text-industrial-200 font-bold mb-2 text-xs uppercase flex items-center gap-2">
                            <Network size={14} /> Blockchain / DeFi
                        </h3>
                        <p className="text-xs text-industrial-400 font-mono leading-relaxed group-hover:text-industrial-300">{DATA.skills.blockchain}</p>
                    </div>
                    <div className="bg-industrial-800 border border-industrial-600 p-4 sharp-edge hover:border-industrial-200 transition-colors group">
                        <h3 className="text-industrial-200 font-bold mb-2 text-xs uppercase flex items-center gap-2">
                            <Database size={14} /> Infrastructure
                        </h3>
                        <p className="text-xs text-industrial-400 font-mono leading-relaxed group-hover:text-industrial-300">{DATA.skills.infrastructure}</p>
                    </div>
                    <div className="bg-industrial-800 border border-industrial-600 p-4 sharp-edge hover:border-industrial-200 transition-colors group">
                        <h3 className="text-industrial-200 font-bold mb-2 text-xs uppercase flex items-center gap-2">
                            <Code size={14} /> Languages
                        </h3>
                        <p className="text-xs text-industrial-400 font-mono leading-relaxed group-hover:text-industrial-300">{DATA.skills.languages}</p>
                    </div>
                </div>

                {/* Awards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DATA.awards.map((award, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-industrial-300 font-mono border border-industrial-700/50 p-3 hover:bg-industrial-800/50 transition-colors hover:border-industrial-400 cursor-crosshair">
                            <span className="text-industrial-100">★</span>
                            {award}
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
