'use client';

import React, { useEffect, useRef } from 'react';
import styles from './StarField.module.css';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
}

export default function StarField() {
    const starsRef = useRef<Star[]>([]);

    useEffect(() => {
        // Generate random stars on mount
        const stars: Star[] = [];
        for (let i = 0; i < 80; i++) {
            stars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
                duration: Math.random() * 3 + 2,
            });
        }
        starsRef.current = stars;
    }, []);

    return (
        <div className={styles.starField}>
            {Array.from({ length: 80 }).map((_, i) => (
                <div
                    key={i}
                    className={styles.star}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                />
            ))}
            {/* Add some larger glowing stars */}
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={`glow-${i}`}
                    className={styles.glowingStar}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                    }}
                />
            ))}
        </div>
    );
}
