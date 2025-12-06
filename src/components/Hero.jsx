import React, { useState, useEffect } from 'react';
import { DATA } from '../data';
import { motion } from 'framer-motion';

const ScrambleText = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    const scramble = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayedText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    };

    return (
        <motion.h1
            className={className}
            onMouseEnter={scramble}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.h1>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">

            {/* Background Ascii/Grid decoration */}
            <div className="absolute top-20 right-10 text-[10px] text-industrial-800 font-mono opacity-20 hidden md:block select-none pointer-events-none whitespace-pre leading-none">
                {`
  /\\_/\\  
 ( o.o ) 
  > ^ <  
 SYSTEM
 READY
                `}
            </div>

            <div className="max-w-7xl w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Main Title Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-8 bg-industrial-900/80 backdrop-blur-sm border border-industrial-600 p-8 md:p-12 sharp-edge relative overflow-hidden group"
                >
                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-industrial-200 opacity-0 group-hover:opacity-50 animate-[scan_3s_ease-in-out_infinite]" />

                    {/* Decorative Corner lines */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-industrial-200"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-industrial-200"></div>

                    <div className="text-[10px] text-industrial-500 font-mono mb-2 tracking-widest">
                        ID: 0x{Math.floor(Math.random() * 16777215).toString(16).toUpperCase()} // SUBJECT
                    </div>

                    <ScrambleText
                        text={DATA.profile.name.toUpperCase()}
                        className="text-4xl md:text-8xl font-black text-industrial-100 mb-4 tracking-tighter mix-blend-difference selection:bg-white selection:text-black cursor-pointer leading-tight"
                    />

                    <h2 className="text-lg md:text-2xl text-industrial-200 font-mono mb-6 border-l-4 border-industrial-400 pl-4 flex items-center gap-3">
                        <span className="w-2 h-2 bg-industrial-200 animate-pulse"></span>
                        {DATA.profile.title}
                    </h2>
                    <p className="text-industrial-400 font-mono text-sm max-w-2xl leading-relaxed border-t border-industrial-800 pt-4">
                        <span className="text-industrial-100 mr-2">root@portfolio:~$</span>
                        {DATA.summary}
                        <span className="inline-block w-2 h-4 bg-industrial-400 ml-1 animate-[blink_1s_step-end_infinite]"></span>
                    </p>
                </motion.div>

                {/* Contact / Links Block */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="md:col-span-4 flex flex-col gap-4"
                >
                    <div className="bg-industrial-900/90 backdrop-blur-sm border border-industrial-600 p-6 sharp-edge hover:border-industrial-200 transition-colors">
                        <h3 className="text-industrial-500 text-xs font-bold mb-4 uppercase tracking-widest border-b border-industrial-800 pb-2">Connect Nodes</h3>
                        <ul className="space-y-3 font-mono text-sm">
                            <li>
                                <a href={DATA.profile.contacts.github} className="flex items-center justify-between text-industrial-300 hover:text-industrial-100 transition-colors group">
                                    <span className="flex items-center"><span className="w-1.5 h-1.5 bg-industrial-500 mr-3 group-hover:bg-industrial-200 transition-colors"></span>GITHUB</span>
                                    <span className="text-xs text-industrial-600 group-hover:text-industrial-200">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href={DATA.profile.contacts.linkedin} className="flex items-center justify-between text-industrial-300 hover:text-industrial-100 transition-colors group">
                                    <span className="flex items-center"><span className="w-1.5 h-1.5 bg-industrial-500 mr-3 group-hover:bg-industrial-200 transition-colors"></span>LINKEDIN</span>
                                    <span className="text-xs text-industrial-600 group-hover:text-industrial-200">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href={DATA.profile.contacts.twitter} className="flex items-center justify-between text-industrial-300 hover:text-industrial-100 transition-colors group">
                                    <span className="flex items-center"><span className="w-1.5 h-1.5 bg-industrial-500 mr-3 group-hover:bg-industrial-200 transition-colors"></span>TWITTER</span>
                                    <span className="text-xs text-industrial-600 group-hover:text-industrial-200">↗</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${DATA.profile.contacts.email}`} className="flex items-center justify-between text-industrial-300 hover:text-industrial-100 transition-colors group">
                                    <span className="flex items-center"><span className="w-1.5 h-1.5 bg-industrial-500 mr-3 group-hover:bg-industrial-200 transition-colors"></span>EMAIL</span>
                                    <span className="text-xs text-industrial-600 group-hover:text-industrial-200">@</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-industrial-900/90 backdrop-blur-sm border border-industrial-600 p-6 sharp-edge flex-grow relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <h3 className="text-industrial-500 text-xs font-bold mb-4 uppercase tracking-widest flex justify-between items-center">
                            <span>Status</span>
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        </h3>

                        <div className="mt-4 text-industrial-400 text-xs font-mono space-y-2">
                            <div className="flex justify-between">
                                <span>LOC</span>
                                <span className="text-industrial-200">{DATA.profile.location}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>UPTIME</span>
                                <span className="text-industrial-200">99.9%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ENV</span>
                                <span className="text-industrial-200">PROD</span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-industrial-800 text-[10px] text-industrial-600">
                                LAST LOGIN: {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

