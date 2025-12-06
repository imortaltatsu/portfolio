# Portfolio - Aditya Berry

A high-performance, industrial-themed portfolio website built with React, Vite, and Tailwind CSS. Features a 3D interactive background using React Three Fiber.

## Tech Stack

-   **Framework**: React 18 + Vite
-   **Styling**: Tailwind CSS v4 (Alpha)
-   **3D Graphics**: @react-three/fiber, @react-three/drei
-   **Animations**: Framer Motion
-   **Icons**: Lucide React

## Features

-   **Industrial Aesthetic**: Monochrome, sharp edges, dither effects.
-   **Interactive 3D Background**: Custom starfield, constellations, and comets.
-   **Bento Grid Layout**: Responsive, dense layout for projects and experience.
-   **Live Telemetry**: Real-time simulated server status and sparklines.
-   **Performance**: Optimized for 60fps animations.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    bun install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    # or
    bun run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components`: Reusable UI components (Hero, BentoGrid, ThreeScene, etc.)
-   `src/data.js`: Centralized data file for portfolio content.
-   `src/index.css`: Global styles and Tailwind configuration.

## License

MIT
