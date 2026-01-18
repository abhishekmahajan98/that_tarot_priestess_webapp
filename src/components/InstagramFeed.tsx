'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { InstagramOutlined } from '@ant-design/icons';
import styles from './InstagramFeed.module.css';

// Placeholder Instagram posts - replace with actual feed or embed
const instagramPosts = [
    { id: 1, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { id: 2, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { id: 3, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { id: 4, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { id: 5, gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { id: 6, gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)' },
];

export default function InstagramFeed() {
    return (
        <section className={styles.instagram}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.preTitle}>✧ Follow the Journey ✧</p>
                    <h2 className={styles.title}>
                        <InstagramOutlined className={styles.instaIcon} />
                        @thattarotpriestess
                    </h2>
                    <p className={styles.subtitle}>
                        Daily card pulls, mystical insights, and behind-the-scenes magic
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {instagramPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href="https://www.instagram.com/thattarotpriestess/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.post}
                            style={{ background: post.gradient }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={styles.postOverlay}>
                                <InstagramOutlined className={styles.postIcon} />
                            </div>
                            <div className={styles.postPlaceholder}>
                                <span>✧</span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.a
                    href="https://www.instagram.com/thattarotpriestess/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.followBtn}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <InstagramOutlined />
                    Follow on Instagram
                </motion.a>
            </div>
        </section>
    );
}
