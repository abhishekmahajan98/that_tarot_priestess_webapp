'use client';

import React from 'react';
import Link from 'next/link';
import {
    InstagramOutlined,
    FacebookOutlined,
    MailOutlined,
    HeartFilled
} from '@ant-design/icons';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoIcon}>✧</span>
                            <span className={styles.logoText}>That Tarot Priestess</span>
                        </Link>
                        <p className={styles.tagline}>
                            Illuminating paths through the wisdom of the cards.
                            Every reading is a journey of discovery.
                        </p>
                        <div className={styles.socials}>
                            <a
                                href="https://www.instagram.com/thattarotpriestess/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                <InstagramOutlined />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="Facebook"
                            >
                                <FacebookOutlined />
                            </a>
                            <a
                                href="mailto:hello@tarotpriestess.com"
                                className={styles.socialLink}
                                aria-label="Email"
                            >
                                <MailOutlined />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <nav className={styles.nav}>
                            <a href="#home">Home</a>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                            <a href="#testimonials">Testimonials</a>
                            <a href="#booking">Book a Reading</a>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Readings</h4>
                        <nav className={styles.nav}>
                            <a href="#services">Single Card Reading</a>
                            <a href="#services">Three Card Spread</a>
                            <a href="#services">Celtic Cross</a>
                            <a href="#services">Love & Relationships</a>
                            <a href="#services">Career & Purpose</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Get in Touch</h4>
                        <div className={styles.contact}>
                            <p>
                                <a href="mailto:hello@tarotpriestess.com">
                                    hello@tarotpriestess.com
                                </a>
                            </p>
                            <p className={styles.hours}>
                                Available for readings<br />
                                Mon - Sat, 10am - 8pm EST
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}>
                    <span>✧</span>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Tarot Priestess. All rights reserved.
                    </p>
                    <p className={styles.madeWith}>
                        Made with <HeartFilled className={styles.heart} /> and a little magic by{' '}
                        <a href="#" className={styles.creditLink}>Namaste Coding</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
