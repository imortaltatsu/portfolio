import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Card({ title, subtitle, date, children, className = "", delay = 0, icon: Icon }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            className={`bg-industrial-800/80 backdrop-blur-sm border border-industrial-600 p-6 sharp-edge 
        hover:border-industrial-200 hover:bg-industrial-800 transition-all duration-300 group flex flex-col h-full relative overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Glitch Overlay on Hover */}
            <div className={`absolute inset-0 bg-industrial-200/5 pointer-events-none transition-opacity duration-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)', backgroundSize: '4px 4px' }} />

            <div className="flex justify-between items-start mb-4 border-b border-industrial-700 pb-2 relative z-10">
                <div className="flex items-center gap-3">
                    {Icon && (
                        <div className={`p-2 bg-industrial-900 border border-industrial-600 text-industrial-300 
              group-hover:text-industrial-100 group-hover:border-industrial-200 transition-colors`}>
                            <Icon size={20} strokeWidth={1.5} />
                        </div>
                    )}
                    <div>
                        <h3 className={`text-lg font-bold text-industrial-100 uppercase tracking-tight 
              ${isHovered ? 'animate-pulse' : ''}`}>
                            {title}
                        </h3>
                        {subtitle && (
                            <p className="text-xs text-industrial-400 font-mono mt-1">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
                {date && (
                    <span className="text-xs font-mono text-industrial-500 bg-industrial-900/50 px-2 py-1">
                        {date}
                    </span>
                )}
            </div>

            <div className="text-sm text-industrial-300 font-mono leading-relaxed flex-grow relative z-10">
                {children}
            </div>

            {/* Industrial decoration */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-industrial-700/50 text-[10px] text-industrial-600 font-mono relative z-10">
                <span className="group-hover:text-industrial-400 transition-colors">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                <span className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-none ${isHovered ? 'bg-green-500' : 'bg-industrial-600'} transition-colors`} />
                    STATUS: {isHovered ? 'ENGAGED' : 'IDLE'}
                </span>
            </div>
        </motion.div>
    );
}
