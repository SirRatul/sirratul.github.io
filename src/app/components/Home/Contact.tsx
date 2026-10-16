'use client';

import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { sectionReveal } from '@/utils/animations';

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
        if (!value.trim()) return 'Name is required';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
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
    <section id='contact' className='container max-w-7xl mx-auto scroll-mt-16 px-4'>
      <motion.div {...sectionReveal}>
        <div className='section-head'>
          <h2 className='section-title'>Get in touch</h2>
          <p className='section-lead text-muted-on-dark'>
            If you&apos;re hiring or have a project in mind, send me a message and I&apos;ll get
            back to you.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <p className='prose-body text-left max-w-lg'>
              I&apos;m currently open to remote roles. The quickest way to reach me is email.
            </p>

            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <HiOutlineEnvelope className='h-6 w-6 text-primary' />
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Email</h3>
                  <a
                    href='mailto:samsulratul98@gmail.com'
                    className='text-gray-700 dark:text-slate-300 hover:text-primary'
                    aria-label='Send an email to samsulratul98@gmail.com'
                  >
                    samsulratul98@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <HiOutlinePhone className='h-6 w-6 text-primary' />
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Phone</h3>
                  <a
                    href='tel:+8801521431231'
                    className='text-gray-700 dark:text-slate-300 hover:text-primary'
                    aria-label='Call +8801521431231'
                  >
                    +8801521431231
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <HiOutlineMapPin className='h-6 w-6 text-primary' />
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Location</h3>
                  <p className='text-gray-700 dark:text-slate-300'>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white dark:bg-slate-900/80 border border-gray-200/90 dark:border-white/10 p-6 md:p-8 rounded-2xl shadow-md dark:card-shadow-dark'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2 text-gray-700 dark:text-slate-300'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  autoComplete='name'
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className='input-premium'
                />
                {errors.name && (
                  <p className='text-red-600 dark:text-red-400 text-sm mt-1'>{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2 text-gray-700 dark:text-slate-300'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  autoComplete='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className='input-premium'
                />
                {errors.email && (
                  <p className='text-red-600 dark:text-red-400 text-sm mt-1'>{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2 text-gray-700 dark:text-slate-300'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className='input-premium resize-none min-h-[140px]'
                />
                {errors.message && (
                  <p className='text-red-600 dark:text-red-400 text-sm mt-1'>{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={status === 'loading'}
                className='w-full rounded-xl bg-primary-strong text-white font-bold text-base py-4 px-4 hover:bg-primary-strong/90 disabled:opacity-60 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900'
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>

              {/* Feedback Messages */}
              {status === 'success' && (
                <p className='text-green-700 dark:text-green-400 text-center' role='status'>
                  Thanks, your message was sent.
                </p>
              )}

              {status === 'error' && (
                <p className='text-red-600 dark:text-red-400 text-center' role='alert'>
                  The message didn&apos;t send. Please try again, or email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
