'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import {
    StarOutlined,
    HeartOutlined,
    CompassOutlined,
    CrownOutlined,
    ThunderboltOutlined,
    EyeOutlined
} from '@ant-design/icons';
import styles from './ServicesSection.module.css';

const services = [
    {
        icon: <StarOutlined />,
        title: 'Single Card Reading',
        description: 'Quick guidance for a specific question or daily insight. Perfect for those seeking clarity on a particular situation.',
        price: '$25',
        duration: '15 min',
    },
    {
        icon: <CompassOutlined />,
        title: 'Three Card Spread',
        description: 'Past, present, and future insights. Understand your journey and see the path that lies ahead.',
        price: '$45',
        duration: '30 min',
        popular: true,
    },
    {
        icon: <CrownOutlined />,
        title: 'Celtic Cross Reading',
        description: 'Deep, comprehensive reading covering all aspects of your situation. The most thorough exploration available.',
        price: '$85',
        duration: '60 min',
    },
    {
        icon: <HeartOutlined />,
        title: 'Love & Relationships',
        description: 'Specialized reading focused on matters of the heart. Gain clarity on romantic connections and partnerships.',
        price: '$55',
        duration: '45 min',
    },
    {
        icon: <ThunderboltOutlined />,
        title: 'Career & Purpose',
        description: 'Illuminate your professional path. Discover opportunities and align with your true calling.',
        price: '$55',
        duration: '45 min',
    },
    {
        icon: <EyeOutlined />,
        title: 'Spiritual Guidance',
        description: 'Connect with your higher self. Explore spiritual questions and receive messages from the universe.',
        price: '$65',
        duration: '45 min',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
} as const;

export default function ServicesSection() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.preTitle}>✧ Sacred Offerings ✧</p>
                    <h2 className={styles.title}>Choose Your Reading</h2>
                    <p className={styles.subtitle}>
                        Each reading is a doorway to deeper understanding. Select the experience that resonates with your soul.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <div className={`${styles.card} ${service.popular ? styles.popular : ''}`}>
                                {service.popular && (
                                    <span className={styles.popularBadge}>Most Popular</span>
                                )}
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <div className={styles.cardFooter}>
                                    <div className={styles.pricing}>
                                        <span className={styles.price}>{service.price}</span>
                                        <span className={styles.duration}>{service.duration}</span>
                                    </div>
                                    <a href="#booking" className={styles.bookBtn}>
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
