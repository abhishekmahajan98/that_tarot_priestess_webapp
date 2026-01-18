'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, Rate } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './TestimonialsSection.module.css';

const testimonials = [
    {
        name: 'Sarah M.',
        location: 'New York, NY',
        rating: 5,
        text: "I was going through a difficult transition in my life and the reading I received was exactly what I needed. The insights were profound and helped me find clarity when everything seemed uncertain. I left feeling empowered and at peace.",
        service: 'Celtic Cross Reading',
    },
    {
        name: 'Michael R.',
        location: 'Los Angeles, CA',
        rating: 5,
        text: "Skeptical at first, but completely converted after my session. The accuracy was uncanny, and the guidance around my career decisions has proven invaluable. This reading helped me take a leap of faith that changed my life.",
        service: 'Career & Purpose Reading',
    },
    {
        name: 'Jessica L.',
        location: 'Chicago, IL',
        rating: 5,
        text: "The love reading I received was beautiful and insightful. It helped me understand patterns in my relationships and gave me the courage to open my heart again. I recommend this to anyone seeking clarity in matters of love.",
        service: 'Love & Relationships',
    },
    {
        name: 'David K.',
        location: 'Austin, TX',
        rating: 5,
        text: "An absolutely transformative experience. The spiritual guidance I received connected so deeply with my personal journey. I felt truly seen and understood. This is a gift that everyone should experience.",
        service: 'Spiritual Guidance',
    },
    {
        name: 'Amanda W.',
        location: 'Seattle, WA',
        rating: 5,
        text: "I've been returning for monthly readings for over a year now. The consistency and accuracy of the insights has been remarkable. It's become an essential part of my self-care and decision-making process.",
        service: 'Three Card Spread',
    },
];

export default function TestimonialsSection() {
    const carouselRef = React.useRef<any>(null);

    return (
        <section id="testimonials" className={styles.testimonials}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.preTitle}>✧ Sacred Stories ✧</p>
                    <h2 className={styles.title}>What Seekers Say</h2>
                    <p className={styles.subtitle}>
                        Discover how tarot has illuminated paths and transformed lives.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.carouselWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={() => carouselRef.current?.prev()}
                        aria-label="Previous testimonial"
                    >
                        <LeftOutlined />
                    </button>

                    <Carousel
                        ref={carouselRef}
                        autoplay
                        autoplaySpeed={6000}
                        dots={{ className: styles.dots }}
                        effect="fade"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={styles.slide}>
                                <div className={styles.card}>
                                    <div className={styles.quoteIcon}>❝</div>
                                    <p className={styles.text}>{testimonial.text}</p>
                                    <div className={styles.rating}>
                                        <Rate disabled defaultValue={testimonial.rating} />
                                    </div>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className={styles.authorInfo}>
                                            <span className={styles.name}>{testimonial.name}</span>
                                            <span className={styles.location}>{testimonial.location}</span>
                                        </div>
                                    </div>
                                    <span className={styles.service}>{testimonial.service}</span>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={() => carouselRef.current?.next()}
                        aria-label="Next testimonial"
                    >
                        <RightOutlined />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
