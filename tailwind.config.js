/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                industrial: {
                    900: '#0f0a06', // Almost black brown
                    800: '#1a120b', // Deep Brown (Background)
                    700: '#2d241b', // Panel Background
                    600: '#4a3f35', // Borders
                    500: '#736253', // Muted Text
                    400: '#9c8c74', // Secondary Text
                    300: '#c5b596', // Primary Text
                    200: '#d4b483', // Accent (Brass)
                    100: '#e5d0ac', // Highlight
                }
            },
            fontFamily: {
                mono: ['Space Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'dither': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
            }
        },
    },
    plugins: [],
}
