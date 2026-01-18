'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.imageDecor}>
                                <span className={styles.decorSymbol}>☽</span>
                                <span className={styles.decorSymbol}>✧</span>
                                <span className={styles.decorSymbol}>☆</span>
                            </div>
                            <div className={styles.imageContent}>
                                <span className={styles.imageIcon}>🔮</span>
                            </div>
                        </div>
                        <div className={styles.floatingCard}>
                            <span className={styles.cardNumber}>10+</span>
                            <span className={styles.cardText}>Years of Reading</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className={styles.preTitle}>✧ Meet Your Guide ✧</p>
                        <h2 className={styles.title}>A Journey of Intuition & Wisdom</h2>

                        <div className={styles.story}>
                            <p>
                                For over a decade, I have dedicated my life to the sacred art of tarot reading.
                                What began as a personal journey of self-discovery has blossomed into a calling
                                to help others navigate life's profound questions.
                            </p>
                            <p>
                                My readings blend traditional tarot wisdom with intuitive insight, creating
                                a safe, nurturing space where you can explore your innermost thoughts and
                                receive guidance that resonates with your soul's journey.
                            </p>
                            <p>
                                I believe that the cards don't predict a fixed future—they illuminate
                                possibilities and empower you to make conscious choices. Every reading
                                is a collaborative journey, honoring your free will while revealing the
                                energies surrounding your path.
                            </p>
                        </div>

                        <div className={styles.highlights}>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>✧</span>
                                <div>
                                    <span className={styles.highlightTitle}>Certified Reader</span>
                                    <span className={styles.highlightText}>Advanced Tarot Studies</span>
                                </div>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>✧</span>
                                <div>
                                    <span className={styles.highlightTitle}>5,000+ Readings</span>
                                    <span className={styles.highlightText}>Lives Touched Worldwide</span>
                                </div>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>✧</span>
                                <div>
                                    <span className={styles.highlightTitle}>Safe & Confidential</span>
                                    <span className={styles.highlightText}>Sacred Space Guaranteed</span>
                                </div>
                            </div>
                        </div>

                        <a href="#booking" className={styles.ctaButton}>
                            Begin Your Journey
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
