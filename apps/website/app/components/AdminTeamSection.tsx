'use client'

import { motion } from 'framer-motion'
import {
  FaCalendarCheck,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa'

export default function AdminTeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    {
      value: '100+',
      label: 'GDG on Campus chapters in North America',
      icon: <FaGlobeAmericas className='mb-4 text-4xl text-purple-400' />,
    },
    {
      value: '20',
      label: 'GDG on Campus chapters in Canada',
      icon: <FaMapMarkerAlt className='mb-4 text-4xl text-purple-400' />,
    },
    {
      value: '1700+',
      label: 'Registered chapter members (highest in Canada!)',
      icon: <FaUsers className='mb-4 text-4xl text-purple-400' />,
    },
    {
      value: '60+',
      label: 'Team members',
      icon: <FaUsers className='mb-4 text-4xl text-purple-400' />,
    },
    {
      value: '~11',
      label: 'Yearly events',
      icon: <FaCalendarCheck className='mb-4 text-4xl text-purple-400' />,
    },
  ]

  return (
    <div className='mx-auto mb-16 mt-8 flex max-w-7xl flex-col gap-y-16 px-4 sm:px-6 lg:gap-y-24 lg:px-8'>
      {/* Info Blocks */}
      <motion.div
        className='grid gap-8 md:grid-cols-2'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className='group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 dark:border-neutral-800 dark:bg-[#111111]'
        >
          <h2 className='relative z-10 mb-6 text-2xl font-bold text-black sm:text-3xl dark:text-white'>
            Supporting Sub-teams
          </h2>
          <p className='relative z-10 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400'>
            We work with the leads of each sub-team (Community, Hackathon,
            Marketing & Branding, and Open Source) to provide strategic
            guidance, operational support, and resource coordination. From
            setting long-term goals to overseeing budgets and ensuring
            cross-collaboration, we help turn ideas into impactful events and
            programs for students.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className='group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 dark:border-neutral-800 dark:bg-[#111111]'
        >
          <h2 className='relative z-10 mb-6 text-2xl font-bold text-black sm:text-3xl dark:text-white'>
            Building Partnerships
          </h2>
          <p className='relative z-10 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400'>
            Beyond day-to-day coordination, our Admin Team focuses on
            maintaining relationships with external partners including other
            student organizations, GDG chapters, and the broader GDG
            organization. By continuing our partnership efforts, we want to work
            on expanding opportunities and grow the impact of GDG McMasterU both
            on campus and beyond.
          </p>
        </motion.div>
      </motion.div>

      {/* By The Numbers */}
      <motion.div
        className='rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 text-center md:p-16 dark:border-neutral-800 dark:bg-[#111111]'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className='mb-16 text-3xl font-bold text-black sm:text-4xl dark:text-white'>
          GDG McMasterU By the Numbers
        </h2>

        <div className='grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 dark:border-neutral-800 dark:bg-[#111111] ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              {stat.icon}
              <div className='mb-4 text-5xl font-extrabold text-black dark:text-white'>
                {stat.value}
              </div>
              <div className='text-base font-medium text-neutral-600 sm:text-lg dark:text-neutral-400'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
