'use client'

import { motion } from 'framer-motion'
import {
  FaCalendarCheck,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaUsers,
} from 'react-icons/fa'

export default function AdminTeamContent() {
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
    <div className='mt-16 min-h-screen bg-black px-4 py-20 font-sans text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl space-y-24'>
        {/* Hero Section */}
        <motion.div
          className='space-y-8 text-center'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className='mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-purple-300'
          >
            Direction & Operations
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className='bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl'
          >
            Admin Team
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='mx-auto max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl'
          >
            The GDG McMasterU Admin Team oversees the overall direction and
            operations of the chapter. Made up of the President, Vice
            Presidents, and the VP of Finance, the Admin Team works behind the
            scenes to ensure that every initiative runs smoothly and aligns with
            our mission of building an inclusive developer community.
          </motion.p>
        </motion.div>

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
            className='group relative overflow-hidden rounded-3xl border border-purple-900/40 bg-gradient-to-br from-gray-900 to-black p-8 transition-colors hover:border-purple-500/50 md:p-10'
          >
            <div className='absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl transition-colors group-hover:bg-purple-500/20'></div>
            <h2 className='relative z-10 mb-6 text-3xl font-bold text-white'>
              Supporting Sub-teams
            </h2>
            <p className='relative z-10 text-lg leading-relaxed text-gray-400'>
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
            className='group relative overflow-hidden rounded-3xl border border-indigo-900/40 bg-gradient-to-bl from-gray-900 to-black p-8 transition-colors hover:border-indigo-500/50 md:p-10'
          >
            <div className='absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl transition-colors group-hover:bg-indigo-500/20'></div>
            <h2 className='relative z-10 mb-6 text-3xl font-bold text-white'>
              Building Partnerships
            </h2>
            <p className='relative z-10 text-lg leading-relaxed text-gray-400'>
              Beyond day-to-day coordination, our Admin Team focuses on
              maintaining relationships with external partners including other
              student organizations, GDG chapters, and the broader GDG
              organization. By continuing our partnership efforts, we want to
              work on expanding opportunities and grow the impact of GDG
              McMasterU both on campus and beyond.
            </p>
          </motion.div>
        </motion.div>

        {/* By The Numbers */}
        <motion.div
          className='rounded-[3rem] border border-purple-900/30 bg-purple-950/20 p-8 text-center md:p-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className='mb-16 text-4xl font-bold'>
            GDG McMasterU By the Numbers
          </h2>

          <div className='grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`flex flex-col items-center rounded-2xl border border-purple-900/20 bg-black/40 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}
              >
                {stat.icon}
                <div className='mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-extrabold text-transparent'>
                  {stat.value}
                </div>
                <div className='text-lg font-medium text-purple-200'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
