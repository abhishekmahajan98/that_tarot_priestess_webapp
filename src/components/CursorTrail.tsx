'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CursorTrail.module.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    symbol: string;
}

const symbols = ['✧', '✦', '☆', '⋆', '·'];

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const createParticle = (x: number, y: number) => {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            const particle: Particle = {
                x,
                y,
                size: Math.random() * 12 + 8,
                opacity: 1,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2 - 1,
                life: 0,
                maxLife: Math.random() * 40 + 30,
                symbol,
            };
            particlesRef.current.push(particle);
        };

        let lastX = 0;
        let lastY = 0;
        let throttleCounter = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            const distance = Math.sqrt(
                Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
            );

            throttleCounter++;
            if (distance > 10 && throttleCounter % 3 === 0) {
                createParticle(e.clientX, e.clientY);
                lastX = e.clientX;
                lastY = e.clientY;
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current = particlesRef.current.filter((particle) => {
                particle.life++;
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.opacity = 1 - particle.life / particle.maxLife;

                if (particle.life >= particle.maxLife) return false;

                ctx.save();
                ctx.font = `${particle.size}px serif`;
                ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
                ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
                ctx.shadowBlur = 10;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(particle.symbol, particle.x, particle.y);
                ctx.restore();

                return true;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
