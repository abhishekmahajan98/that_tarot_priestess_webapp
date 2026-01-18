'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Select, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import styles from './BookingSection.module.css';

const { TextArea } = Input;
const { Option } = Select;

const services = [
    { value: 'single', label: 'Single Card Reading - ₹500' },
    { value: 'three-card', label: 'Three Card Spread - ₹999' },
    { value: 'celtic-cross', label: 'Celtic Cross Reading - ₹1,999' },
    { value: 'love', label: 'Love & Relationships - ₹1,299' },
    { value: 'career', label: 'Career & Purpose - ₹1,299' },
    { value: 'spiritual', label: 'Spiritual Guidance - ₹1,499' },
];

export default function BookingSection() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        message.success({
            content: 'Your booking request has been sent! I will reach out to you soon. ✧',
            duration: 5,
        });
        form.resetFields();
    };

    return (
        <section id="booking" className={styles.booking}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.preTitle}>✧ Begin Your Journey ✧</p>
                    <h2 className={styles.title}>Book Your Reading</h2>
                    <p className={styles.subtitle}>
                        Ready to unlock the wisdom of the cards? Fill out the form below and
                        I'll be in touch to schedule your personalized reading session.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.formWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.formCard}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                            className={styles.form}
                        >
                            <div className={styles.formGrid}>
                                <Form.Item
                                    name="name"
                                    label="Your Name"
                                    rules={[{ required: true, message: 'Please enter your name' }]}
                                >
                                    <Input
                                        placeholder="Enter your full name"
                                        size="large"
                                        className={styles.input}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="Email Address"
                                    rules={[
                                        { required: true, message: 'Please enter your email' },
                                        { type: 'email', message: 'Please enter a valid email' },
                                    ]}
                                >
                                    <Input
                                        placeholder="your@email.com"
                                        size="large"
                                        className={styles.input}
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="service"
                                label="Choose Your Reading"
                                rules={[{ required: true, message: 'Please select a reading type' }]}
                            >
                                <Select
                                    placeholder="Select a reading type"
                                    size="large"
                                    className={styles.select}
                                >
                                    {services.map(service => (
                                        <Option key={service.value} value={service.value}>
                                            {service.label}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="intention"
                                label="Your Intention or Question (Optional)"
                            >
                                <TextArea
                                    placeholder="Share what's on your mind or the area of life you'd like guidance on..."
                                    rows={4}
                                    className={styles.textarea}
                                />
                            </Form.Item>

                            <Form.Item className={styles.submitWrapper}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    icon={<SendOutlined />}
                                    size="large"
                                    className={styles.submitButton}
                                >
                                    Request Booking
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className={styles.decorStar1}>✧</div>
                        <div className={styles.decorStar2}>☆</div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <h4 className={styles.infoTitle}>What to Expect</h4>
                            <ul className={styles.infoList}>
                                <li>I'll respond within 24 hours to confirm your booking</li>
                                <li>Readings are conducted via video call or phone</li>
                                <li>Payment is collected before the session</li>
                                <li>A sacred, confidential space for your journey</li>
                            </ul>
                        </div>
                        <div className={styles.infoCard}>
                            <h4 className={styles.infoTitle}>Contact Directly</h4>
                            <p className={styles.infoText}>
                                Prefer to reach out directly? Email me at<br />
                                <a href="mailto:hello@tarotpriestess.com" className={styles.email}>
                                    hello@tarotpriestess.com
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
