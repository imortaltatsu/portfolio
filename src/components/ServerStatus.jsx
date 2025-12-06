import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

const Sparkline = () => {
    const [bars, setBars] = useState(Array(20).fill(50));

    useEffect(() => {
        const interval = setInterval(() => {
            setBars(prev => [...prev.slice(1), Math.random() * 100]);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-end gap-[2px] h-8 w-full mt-2">
            {bars.map((height, i) => (
                <div
                    key={i}
                    className="w-full bg-industrial-500 hover:bg-industrial-200 transition-colors"
                    style={{ height: `${height}%`, opacity: i / 20 + 0.2 }}
                />
            ))}
        </div>
    );
};

export default function ServerStatus() {
    return (
        <div className="bg-industrial-800 border border-industrial-600 p-4 sharp-edge relative overflow-hidden group">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-bold text-industrial-200 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={12} /> Live Telemetry
                </h3>
                <span className="text-[10px] font-mono text-green-500 animate-pulse">● ONLINE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-industrial-400 mb-2">
                <div>
                    <span className="block text-industrial-600">CPU LOAD</span>
                    <span className="text-industrial-200">34% [NORMAL]</span>
                </div>
                <div>
                    <span className="block text-industrial-600">MEM USAGE</span>
                    <span className="text-industrial-200">12GB / 64GB</span>
                </div>
            </div>

            <Sparkline />
        </div>
    );
}
