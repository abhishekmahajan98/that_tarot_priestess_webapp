'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './FAQSection.module.css';

const faqs = [
    {
        key: '1',
        question: 'How does a tarot reading work?',
        answer: 'During a tarot reading, I tune into your energy and the question or situation you bring to the session. The cards act as a mirror, reflecting the energies and possibilities surrounding your path. I interpret the symbols, imagery, and positions to provide guidance and insight tailored specifically to you.',
    },
    {
        key: '2',
        question: 'Do I need to prepare anything before my reading?',
        answer: 'Come with an open mind and heart. It helps to have a general area of focus—such as love, career, or personal growth—but you don\'t need a specific question. I recommend finding a quiet space where you can relax and be present during our session.',
    },
    {
        key: '3',
        question: 'Can tarot predict the future?',
        answer: 'Tarot doesn\'t predict a fixed future—rather, it illuminates possibilities based on your current path and energies. You have free will, and the cards help you see potential outcomes so you can make empowered decisions. Think of it as a cosmic GPS, not a predetermined destiny.',
    },
    {
        key: '4',
        question: 'How are online readings conducted?',
        answer: 'Online readings are done via video call (Zoom or Google Meet). The energy connection works just as powerfully at a distance. I shuffle the cards on your behalf while focusing on your energy, and share my screen so you can see each card as it\'s revealed. Many clients find online readings even more comfortable!',
    },
    {
        key: '5',
        question: 'How long does a reading take?',
        answer: 'Reading durations vary depending on the type you choose: Single Card readings take about 15 minutes, Three Card Spreads are around 30 minutes, and Celtic Cross readings are a full 60-minute deep dive. I never rush—your session gets the time it deserves.',
    },
    {
        key: '6',
        question: 'Is everything in my reading confidential?',
        answer: 'Absolutely. Your reading is a sacred, private space. Everything discussed remains completely confidential. I take your trust seriously and create a judgment-free zone where you can explore any topic openly.',
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className={styles.faq}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.preTitle}>✧ Common Questions ✧</p>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>
                        Have questions about tarot readings? Here are answers to the most common inquiries.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.accordionWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Collapse
                        accordion
                        ghost
                        className={styles.accordion}
                        expandIcon={({ isActive }) =>
                            isActive ?
                                <MinusOutlined className={styles.expandIcon} /> :
                                <PlusOutlined className={styles.expandIcon} />
                        }
                        expandIconPlacement="end"
                        items={faqs.map((faq) => ({
                            key: faq.key,
                            label: <span className={styles.question}>{faq.question}</span>,
                            children: <p className={styles.answer}>{faq.answer}</p>,
                        }))}
                    />
                </motion.div>
            </div>
        </section>
    );
}
