import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Line, Trail } from '@react-three/drei';
import * as THREE from 'three';

// --- Components ---

function ShootingStar() {
    const ref = useRef();
    const [active, setActive] = useState(false);

    // Reset position
    const reset = () => {
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = -10 - Math.random() * 20;
        ref.current.position.set(x, y, z);

        // Random velocity vector
        ref.current.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            0
        ).normalize().multiplyScalar(Math.random() * 0.4 + 0.2);

        setActive(true);
    };

    useFrame(() => {
        if (!ref.current) return;

        if (active) {
            ref.current.position.add(ref.current.userData.velocity);

            // If out of bounds or travelled far, reset
            if (Math.abs(ref.current.position.x) > 25 || Math.abs(ref.current.position.y) > 25) {
                setActive(false);
                setTimeout(reset, Math.random() * 2000 + 500); // Random delay
            }
        } else {
            // Initial start check
            if (Math.random() < 0.01) reset();
        }
    });

    return (
        <mesh ref={ref} position={[0, 0, -100]}> {/* Start far away */}
            <Trail width={0.2} length={8} color="#ffffff" attenuation={(t) => t * t}>
                <sphereGeometry args={[0.05]} />
                <meshBasicMaterial color="#ffffff" />
            </Trail>
        </mesh>
    );
}

function Constellation() {
    const group = useRef();

    // Create random points for a "network" look
    const [points, lines] = useMemo(() => {
        const p = [];
        const count = 30; // Number of nodes
        for (let i = 0; i < count; i++) {
            p.push(new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 - 5
            ));
        }

        // Generate connections based on distance
        const l = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                if (p[i].distanceTo(p[j]) < 6) { // Connection threshold
                    l.push([p[i], p[j]]);
                }
            }
        }
        return [p, l];
    }, []);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.z += delta * 0.005; // Very slow rotation
            group.current.rotation.x += delta * 0.001; // Subtle tilt
        }
    });

    return (
        <group ref={group}>
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.03]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            ))}
            {lines.map((line, i) => (
                <Line
                    key={i}
                    points={line}
                    color="#ffffff"
                    transparent
                    opacity={0.1}
                    lineWidth={1}
                />
            ))}
        </group>
    );
}

function BackgroundStars({ count = 1000 }) {
    const mesh = useRef();
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 60;
            p[i * 3 + 1] = (Math.random() - 0.5) * 60;
            p[i * 3 + 2] = -10 - Math.random() * 40;
        }
        return p;
    }, [count]);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.z -= delta * 0.002; // Twist the sky very slowly
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#ffffff"
                sizeAttenuation
                transparent
                opacity={0.8}
            />
        </points>
    );
}

function WireframeMesh({ position, geometry, color = "#ffffff", scale = 1, speed = 1 }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Constant rotation
            meshRef.current.rotation.x += delta * 0.1 * speed;
            meshRef.current.rotation.y += delta * 0.15 * speed;

            // Mouse interaction (Parallax / Tilt)
            const mouseX = state.mouse.x * 0.5;
            const mouseY = state.mouse.y * 0.5;

            meshRef.current.rotation.x += mouseY * delta * 0.5;
            meshRef.current.rotation.y += mouseX * delta * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
                {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
                {geometry === 'torus' && <torusGeometry args={[0.7, 0.2, 16, 32]} />}
                <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    );
}

export default function ThreeScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <fog attach="fog" args={['#000000', 5, 30]} />

                <ambientLight intensity={0.5} />

                <BackgroundStars />
                <Constellation />

                {/* Several shooting stars */}
                <ShootingStar />
                <ShootingStar />
                <ShootingStar />

                <WireframeMesh position={[-2, 1, 0]} geometry="icosahedron" scale={1.2} color="#ffffff" />
                <WireframeMesh position={[2.5, -1, -1]} geometry="octahedron" scale={1.5} color="#a3a3a3" speed={0.8} />
                <WireframeMesh position={[0, -2, 1]} geometry="torus" scale={0.8} color="#525252" speed={1.2} />

                {/* Grid Floor */}
                <gridHelper args={[30, 30, 0x262626, 0x171717]} position={[0, -4, 0]} rotation={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
