'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaCalendarAlt,
  FaHandshake,
  FaNewspaper,
  FaUsers,
} from 'react-icons/fa'

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
    <div className='mt-16 min-h-screen bg-black px-4 py-20 font-sans text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl space-y-24'>
        {/* Hero Section */}
        <motion.div
          className='space-y-8 text-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className='bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl'
          >
            Community Team
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className='mx-auto max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl'
          >
            The Community Team at GDG McMaster focuses on building welcoming,
            high-impact spaces where students can learn practical skills,
            connect with peers, and feel supported throughout the school year.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className='mx-auto max-w-4xl text-lg text-gray-400'
          >
            We design student-first events that help McMaster students grow both
            technically and professionally, especially during recruiting season
            and exam periods. Our goal is to make tech feel accessible,
            collaborative, and community-driven for everyone, regardless of
            experience level.
          </motion.p>
        </motion.div>

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
              className='rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-colors hover:bg-gray-800/50'
            >
              <div className='mb-2 text-3xl font-bold text-green-400'>
                {stat.value}
              </div>
              <div className='text-sm text-gray-400'>{stat.label}</div>
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
            <h2 className='mb-6 text-4xl font-bold'>What We Run</h2>
            <p className='mx-auto max-w-3xl text-xl text-gray-400'>
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
                className='group rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 transition-all duration-300 hover:border-green-500/30'
              >
                <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800/50 transition-transform group-hover:scale-110'>
                  {event.icon}
                </div>
                <h3 className='mb-4 text-2xl font-bold'>{event.title}</h3>
                <p className='leading-relaxed text-gray-400'>
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
                className='group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gray-900'
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
          className='rounded-[3rem] border border-green-900/30 bg-green-950/20 p-8 md:p-16'
        >
          <div className='mx-auto max-w-4xl space-y-12 text-center'>
            <div>
              <h2 className='mb-6 text-4xl font-bold'>How We Work</h2>
              <p className='text-lg leading-relaxed text-gray-300'>
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
              <div className='absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 bg-gradient-to-r from-gray-800 via-green-800 to-gray-800 md:block' />
              <div className='grid gap-8 md:grid-cols-5'>
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className='relative z-10 flex flex-col items-center'
                  >
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 bg-gray-900 text-xl font-bold shadow-[0_0_15px_rgba(34,197,94,0.3)]'>
                      {i + 1}
                    </div>
                    <div className='mb-2 text-lg font-bold text-white'>
                      {item.step}
                    </div>
                    <div className='text-center text-sm text-gray-400'>
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
          <h2 className='text-4xl font-bold'>Join the Team</h2>
          <p className='text-xl text-gray-400'>
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
              className='rounded-full border border-gray-700 bg-gray-800 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-gray-700 active:scale-95'
            >
              Follow our Socials
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
