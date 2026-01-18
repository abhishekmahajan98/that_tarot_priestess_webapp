'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import StarField from './StarField';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section id="home" className={styles.hero}>
            <StarField />

            {/* Animated gradient orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
            <div className={styles.orb3} />

            <div className={styles.content}>
                <motion.div
                    className={styles.tarotCards}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className={styles.card} style={{ transform: 'rotate(-15deg) translateX(-30px)' }}>
                        <span className={styles.cardSymbol}>☽</span>
                    </div>
                    <div className={styles.cardMain}>
                        <span className={styles.cardSymbol}>✧</span>
                    </div>
                    <div className={styles.card} style={{ transform: 'rotate(15deg) translateX(30px)' }}>
                        <span className={styles.cardSymbol}>☆</span>
                    </div>
                </motion.div>

                <motion.p
                    className={styles.preHeadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    ✧ Unlock the Mysteries of Your Path ✧
                </motion.p>

                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Discover What the
                    <span className={styles.highlight}> Cards Reveal </span>
                    About Your Journey
                </motion.h1>

                <motion.p
                    className={styles.subheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    Intuitive tarot readings to illuminate your path, provide clarity in times of uncertainty,
                    and connect you with the wisdom of the universe.
                </motion.p>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <a href="#booking" className={styles.primaryBtn}>
                        Book Your Reading
                    </a>
                    <a href="#services" className={styles.secondaryBtn}>
                        Explore Services
                    </a>
                </motion.div>

                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                >
                    <a href="#services" className={styles.scrollLink}>
                        <span>Discover More</span>
                        <ArrowDownOutlined className={styles.scrollIcon} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
