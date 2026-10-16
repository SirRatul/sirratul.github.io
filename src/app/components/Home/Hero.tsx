import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative py-20 sm:py-24 md:py-32 lg:py-36 overflow-hidden'>
      {/* The one decorative background on the page */}
      <div
        className='absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-[#0c1428]'
        aria-hidden
      />

      <div className='container max-w-7xl mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='flex justify-center items-center mb-8'>
            <Image
              src='/profile.webp'
              alt='Samsul Islam'
              width={160}
              height={160}
              priority
              className='rounded-full w-40 h-40 object-cover ring-4 ring-primary-strong/80 shadow-lg'
            />
          </div>

          <h1
            className='text-[2.75rem] sm:text-6xl md:text-7xl font-extrabold mb-6'
            style={{ fontWeight: 800, lineHeight: 1.05 }}
          >
            Hi, I&apos;m <span className='whitespace-nowrap text-primary'>Samsul Islam</span>
          </h1>

          <div className='mb-8'>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-slate-200 font-semibold mb-4'>
              Software engineer in Dhaka, focused on the frontend.
            </p>
            <p className='text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed'>
              I build web apps and Shopify stores with React, Next.js and TypeScript, for clients in
              Southeast Asia and Europe.
            </p>

            <div className='inline-flex items-center gap-2 mt-6 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-600/30 rounded-full'>
              <span className='w-2 h-2 bg-green-600 rounded-full' aria-hidden />
              <span className='text-sm font-semibold text-green-800 dark:text-green-300'>
                Open to remote roles
              </span>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-center gap-6 mt-10'>
            <Link href='/#projects' className='cta-primary w-full md:w-auto md:min-w-[200px]'>
              See my work
            </Link>
            <Link href='/#contact' className='cta-secondary w-full md:w-auto md:min-w-[200px]'>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
