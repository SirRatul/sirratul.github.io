'use client';

import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations';

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
        name: false,
        email: false,
        message: false,
    });

    const [status, setStatus] = useState<FormStatus>('idle');

    const validateField = (field: keyof FormData, value: string): string => {
        switch (field) {
            case 'name':
                if (!value.trim()) return 'Name is required.';
                if (!/^[a-zA-Z\s]+$/.test(value))
                    return 'Name must contain only letters and spaces.';
                break;
            case 'email':
                if (!value.trim()) return 'Email is required.';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address.';
                break;
            case 'message':
                if (!value.trim()) return 'Message is required.';
                if (value.length < 10) return 'Message must be at least 10 characters.';
                break;
        }
        return '';
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};
        (['name', 'email', 'message'] as (keyof FormData)[]).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (touched[name as keyof FormData]) {
            const error = validateField(name as keyof FormData, value);
            setErrors((prev) => ({
                ...prev,
                [name]: error,
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        const emailjs = await import('@emailjs/browser');
        const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            setStatus('error');
            console.error('Missing EmailJS environment variables.');
            return;
        }

        setStatus('loading');

        try {
            await emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, publicKey);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setTouched({ name: false, email: false, message: false });
        } catch {
            setStatus('error');
        }
    };

    return (
        <div id='contact' className='container max-w-7xl mx-auto py-12 scroll-mt-16'>
            <motion.h1 className='text-4xl font-bold mb-8 text-center' {...fadeInUp}>
                Contact Me
            </motion.h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Contact Information */}
                <motion.div className='space-y-8' {...slideInLeft}>
                    <motion.div {...fadeInUp}>
                        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
                        <p className='text-secondary'>
                            I&apos;m always open to discussing new projects, creative ideas, or
                            opportunities to be part of your visions.
                        </p>
                    </motion.div>

                    <motion.div
                        className='space-y-4'
                        variants={fadeIn}
                        initial='initial'
                        animate='animate'
                    >
                        <motion.div
                            className='flex items-center gap-4'
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <HiOutlineEnvelope className='h-6 w-6 text-primary' />
                            <div>
                                <h3 className='font-semibold'>Email</h3>
                                <a
                                    href='mailto:samsulratul98@gmail.com'
                                    className='text-secondary hover:text-primary'
                                    aria-label='Send an email to samsulratul98@gmail.com'
                                >
                                    samsulratul98@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className='flex items-center gap-4'
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <HiOutlinePhone className='h-6 w-6 text-primary' />
                            <div>
                                <h3 className='font-semibold'>Phone</h3>
                                <a
                                    href='tel:+8801521431231'
                                    className='text-secondary hover:text-primary'
                                    aria-label='Call +8801521431231'
                                >
                                    +8801521431231
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className='flex items-center gap-4'
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <HiOutlineMapPin className='h-6 w-6 text-primary' />
                            <div>
                                <h3 className='font-semibold'>Location</h3>
                                <p className='text-secondary'>Dhaka, Bangladesh</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'
                    {...slideInRight}
                >
                    <motion.form
                        onSubmit={handleSubmit}
                        className='space-y-6'
                        variants={fadeIn}
                        initial='initial'
                        animate='animate'
                    >
                        {/* Name */}
                        <motion.div variants={fadeInUp}>
                            <label htmlFor='name' className='block text-sm font-medium mb-2'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            {errors.name && (
                                <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
                            )}
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={fadeInUp}>
                            <label htmlFor='email' className='block text-sm font-medium mb-2'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            {errors.email && (
                                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                            )}
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={fadeInUp}>
                            <label htmlFor='message' className='block text-sm font-medium mb-2'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                rows={4}
                                className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            {errors.message && (
                                <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                            )}
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type='submit'
                            disabled={status === 'loading'}
                            className='w-full btn btn-primary'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {/* Feedback Messages */}
                        {status === 'success' && (
                            <motion.p
                                className='text-green-500 text-center'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}

                        {status === 'error' && (
                            <motion.p
                                className='text-red-500 text-center'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Failed to send message. Please try again.
                            </motion.p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
}
