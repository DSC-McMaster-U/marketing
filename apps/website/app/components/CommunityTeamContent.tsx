'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaCalendarAlt,
  FaHandshake,
  FaNewspaper,
  FaUsers,
} from 'react-icons/fa'
import AnimatedHero from './AnimatedHero'
import Pill from './Pill'

export default function CommunityTeamContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const events = [
    {
      title: 'Industry Panelists & Career Events',
      description:
        'Including our flagship Resume Roast and Product Panel, where recruiters, co-op students, and industry professionals provide honest insights, resume feedback, and real-world advice followed by open Q&A and networking.',
      icon: <FaUsers className='text-3xl text-green-400' />,
    },
    {
      title: 'Technical Practice Sessions',
      description:
        'Computing review sessions for courses like ENGINEER 1P13/1P10, where students work through sample problems, key concepts, and interactive practice before exams.',
      icon: <FaCalendarAlt className='text-3xl text-green-400' />,
    },
    {
      title: 'Hands-On Workshops',
      description:
        'Practical, high-demand sessions such as Intro to GitHub and Intro to Convolution Neural Networks, designed to include guided learning and live challenges rather than passive presentations.',
      icon: <FaHandshake className='text-3xl text-green-400' />,
    },
    {
      title: 'Collaborative Events',
      description:
        'We regularly collaborate with other student organizations such as IEEE, NSBE, MacAI to broaden reach, create interdisciplinary spaces, and strengthen the tech community on campus.',
      icon: <FaHandshake className='text-3xl text-green-400' />,
    },
    {
      title: 'Community Engagement & Newsletter',
      description:
        'The Community Team contributes to the monthly GDG Newsletter, highlighting upcoming events, industry news, and opportunities for members to stay engaged beyond individual workshops.',
      icon: <FaNewspaper className='text-3xl text-green-400' />,
    },
  ]

  const stats = [
    { value: '4+', label: 'Major events per term' },
    { value: '200+', label: 'Total attendees across events annually' },
    { value: 'Multiple', label: 'Industry collaborations each year' },
    {
      value: 'Cross-club',
      label: 'Partnerships with leading student organizations',
    },
    {
      value: 'Monthly',
      label: 'GDG Newsletter reaching our broader community',
    },
  ]

  const timeline = [
    { step: 'Ideation', desc: 'Brainstorming impactful ideas' },
    { step: 'Outreach', desc: 'Securing speakers & partners' },
    { step: 'Logistics', desc: 'Rooms, timing, and resources' },
    { step: 'Marketing', desc: 'Spreading the word' },
    { step: 'Execution', desc: 'Running the event day-of' },
  ]

  return (
    <div className='flex flex-col gap-y-8'>
      {/* Hero Section */}
      <AnimatedHero
        id='community-hero'
        className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
      >
        <div className='flex w-full flex-col items-center'>
          <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
            <Pill className='bg-green-500'>Community Team</Pill>
            <h1>Fostering connections through workshops and socials.</h1>
            <p className='text-lg text-neutral-600 dark:text-neutral-400'>
              The Community Team at GDG McMaster focuses on building welcoming,
              high-impact spaces where students can learn practical skills,
              connect with peers, and feel supported throughout the school year.
            </p>
          </div>
        </div>
      </AnimatedHero>

      <div className='mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8'>
        {/* Stats Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='grid grid-cols-2 gap-6 md:grid-cols-5'
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className='rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-md dark:border-neutral-800 dark:bg-[#111111] dark:hover:border-green-500/50'
            >
              <div className='mb-2 text-3xl font-bold text-green-500 dark:text-green-400'>
                {stat.value}
              </div>
              <div className='text-sm font-medium text-neutral-600 dark:text-gray-400'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What We Run Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='space-y-12'
        >
          <div className='text-center'>
            <h2 className='mb-6 text-3xl font-bold text-black sm:text-4xl dark:text-white'>
              What We Run
            </h2>
            <p className='mx-auto max-w-3xl text-lg text-neutral-600 sm:text-xl dark:text-gray-400'>
              We organize 4+ events per term, centered around career
              development, technical skill-building, and meaningful
              collaboration. Our events are designed around what students
              actually need at specific points in the semester.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {events.map((event, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className='group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 dark:border-neutral-800 dark:bg-[#111111] dark:hover:border-green-500/50'
              >
                <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 transition-transform group-hover:scale-110 dark:bg-gray-800/50'>
                  {event.icon}
                </div>
                <h3 className='mb-4 text-2xl font-bold text-black dark:text-white'>
                  {event.title}
                </h3>
                <p className='leading-relaxed text-neutral-600 dark:text-gray-400'>
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Event Photos */}
          <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-4'>
            {[
              {
                src: '/images/community/event-1.jpg',
                alt: 'Community Event 1',
              },
              {
                src: '/images/community/event-2.png',
                alt: 'Community Event 2',
                position: 'object-bottom',
              },
              {
                src: '/images/community/event-3.jpg',
                alt: 'Community Event 3',
              },
              {
                src: '/images/community/event-4.jpg',
                alt: 'Community Event 4',
              },
            ].map((img, i) => (
              <div
                key={i}
                className='group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900'
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${img.position || 'object-center'}`}
                />
                <div className='absolute inset-0 z-10 bg-green-500/10 transition-colors group-hover:bg-transparent' />
              </div>
            ))}
          </div>
        </motion.div>

        {/* How We Work Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 md:p-16 dark:border-neutral-800 dark:bg-[#111111]'
        >
          <div className='mx-auto max-w-4xl space-y-12 text-center'>
            <div>
              <h2 className='mb-6 text-3xl font-bold text-black sm:text-4xl dark:text-white'>
                How We Work
              </h2>
              <p className='text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400'>
                The Community Team manages events end-to-end: ideation, speaker
                outreach, logistics coordination, room bookings, marketing
                requests, and day-of execution. From career-focused panels to
                technical workshops, we focus on creating structured yet
                welcoming environments where students feel comfortable asking
                questions and building connections.
              </p>
            </div>

            {/* Timeline */}
            <div className='relative py-12'>
              <div className='absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 bg-gradient-to-r from-neutral-200 via-green-500/50 to-neutral-200 md:block dark:from-gray-800 dark:via-green-800 dark:to-gray-800' />
              <div className='grid gap-8 md:grid-cols-5'>
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className='relative z-10 flex flex-col items-center'
                  >
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 bg-white text-xl font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)] dark:bg-gray-900'>
                      {i + 1}
                    </div>
                    <div className='mb-2 text-lg font-bold text-black dark:text-white'>
                      {item.step}
                    </div>
                    <div className='text-center text-sm text-neutral-600 dark:text-gray-400'>
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='mx-auto max-w-3xl space-y-8 pb-20 text-center'
        >
          <h2 className='text-4xl font-bold dark:text-white'>Join the Team</h2>
          <p className='text-xl text-neutral-600 dark:text-gray-400'>
            If you enjoy planning events, working with industry professionals,
            collaborating with other clubs, or building spaces where students
            can grow, the Community Team is a great place to contribute.
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <a
              href='https://discord.gg/XtYqWmJmh7'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-green-500 px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105 hover:bg-green-400 active:scale-95'
            >
              Join our Discord
            </a>
            <a
              href='https://www.instagram.com/gdgmcmaster/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-gray-300 bg-neutral-100 px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:bg-neutral-200 active:scale-95 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
            >
              Follow our Socials
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
