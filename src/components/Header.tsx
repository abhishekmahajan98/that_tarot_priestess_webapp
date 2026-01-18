'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '@/context/ThemeProvider';
import styles from './Header.module.css';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#booking', label: 'Book Now' },
];

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>✧</span>
                    <span className={styles.logoText}>That Tarot Priestess</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === 'dark' ? (
                                <motion.span
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <SunOutlined />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MoonOutlined />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    <a href="#booking" className={styles.ctaButton}>
                        Book a Reading
                    </a>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <MenuOutlined />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <span className={styles.drawerTitle}>
                        <span className={styles.logoIcon}>✧</span> Menu
                    </span>
                }
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                closeIcon={<CloseOutlined />}
                className={styles.mobileDrawer}
                styles={{
                    header: { borderBottom: '1px solid var(--border-color)' },
                    body: { padding: '24px 0' },
                }}
            >
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className={styles.mobileThemeToggle}>
                        <span>Theme</span>
                        <button onClick={toggleTheme} className={styles.themeToggle}>
                            {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
                        </button>
                    </div>
                </nav>
            </Drawer>
        </motion.header>
    );
}
