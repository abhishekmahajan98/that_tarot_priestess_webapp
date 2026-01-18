'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClockCircleOutlined, FireOutlined } from '@ant-design/icons';
import styles from './CountdownTimer.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Set end date to 5 days from now (resets on each visit for demo)
        const getEndDate = () => {
            const stored = localStorage.getItem('tarot-offer-end');
            if (stored) {
                const endDate = new Date(stored);
                if (endDate > new Date()) {
                    return endDate;
                }
            }
            // Set new end date 5 days from now
            const newEnd = new Date();
            newEnd.setDate(newEnd.getDate() + 5);
            localStorage.setItem('tarot-offer-end', newEnd.toISOString());
            return newEnd;
        };

        const endDate = getEndDate();

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section className={styles.countdown}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>
                        <FireOutlined className={styles.badgeIcon} />
                        Limited Time Offer
                    </div>

                    <h3 className={styles.title}>
                        Book Now & Get <span className={styles.discount}>10% OFF</span> Your First Reading
                    </h3>

                    <p className={styles.subtitle}>
                        This special offer expires soon. Don't miss your chance to begin your journey.
                    </p>

                    <div className={styles.timer}>
                        <div className={styles.timerUnit}>
                            <span className={styles.timerValue}>{String(timeLeft.days).padStart(2, '0')}</span>
                            <span className={styles.timerLabel}>Days</span>
                        </div>
                        <span className={styles.timerSeparator}>:</span>
                        <div className={styles.timerUnit}>
                            <span className={styles.timerValue}>{String(timeLeft.hours).padStart(2, '0')}</span>
                            <span className={styles.timerLabel}>Hours</span>
                        </div>
                        <span className={styles.timerSeparator}>:</span>
                        <div className={styles.timerUnit}>
                            <span className={styles.timerValue}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                            <span className={styles.timerLabel}>Minutes</span>
                        </div>
                        <span className={styles.timerSeparator}>:</span>
                        <div className={styles.timerUnit}>
                            <span className={styles.timerValue}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                            <span className={styles.timerLabel}>Seconds</span>
                        </div>
                    </div>

                    <a href="#booking" className={styles.ctaBtn}>
                        <ClockCircleOutlined />
                        Claim Your Offer Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
