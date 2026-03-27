'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaCode, FaHashtag, FaPaintBrush } from 'react-icons/fa'
import { FiGithub, FiLink } from 'react-icons/fi'
import { teamsData } from '../lib/teamData'
import AnimatedHero from './AnimatedHero'
import Card from './Card'
import Pill from './Pill'
import SectionCard from './SectionCard'

export default function MarketingTeamContent() {
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

  const responsibilities = [
    {
      title: 'Social Media & Digital Strategy',
      description:
        'We manage GDG McMaster’s presence across platforms like Instagram, TikTok, and LinkedIn. We design graphics, edit videos, and write copy that highlights upcoming events, celebrates member achievements, and shares tech insights.',
      icon: <FaHashtag className='text-3xl text-yellow-500' />,
    },
    {
      title: 'Public-Facing Web Development',
      description:
        "We build and maintain the official GDG McMaster website. We focus on UI/UX design, accessibility, and ensuring our web presence effectively communicates our club's mission.",
      icon: <FaCode className='text-3xl text-yellow-500' />,
    },
    {
      title: 'Brand Identity & Storytelling',
      description:
        'We ensure a consistent, professional, and welcoming visual identity across all club touchpoints, making tech feel approachable for everyone.',
      icon: <FaPaintBrush className='text-3xl text-yellow-500' />,
    },
  ]

  const stats = [
    { value: '28K+', label: 'LinkedIn Impressions (Annual)' },
    { value: '1.8K+', label: 'LinkedIn Page Views (Annual)' },
    { value: '2.5K+', label: 'Instagram Followers' },
    { value: '1.1K+', label: 'LinkedIn Followers' },
    { value: '2+', label: 'Custom web apps developed' },
  ]

  const timeline = [
    { step: 'Ideation', desc: 'Campaigns & Features' },
    { step: 'Design', desc: 'UI/UX & Graphics' },
    { step: 'Creation', desc: 'Code & Content' },
    { step: 'Review', desc: 'QA & Polish' },
    { step: 'Launch', desc: 'Deploy & Post' },
  ]

  return (
    <div className='flex flex-col gap-y-8'>
      {/* Hero Section */}
      <AnimatedHero
        id='marketing-hero'
        className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
      >
        <div className='flex w-full flex-col items-center'>
          <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
            <Pill className='bg-yellow-500'>Marketing & Branding Team</Pill>
            <h1>Creative and technical voice of GDG McMaster.</h1>
            <p className='text-lg text-neutral-600 dark:text-neutral-400'>
              We bridge the gap between our club and the broader student body by
              shaping our public image, running our social media channels, and
              developing the digital platforms that keep our community
              connected.
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
              className='rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/50 hover:shadow-md dark:border-neutral-800 dark:bg-[#111111] dark:hover:border-yellow-500/50'
            >
              <div className='mb-2 text-3xl font-bold text-yellow-500 dark:text-yellow-400'>
                {stat.value}
              </div>
              <div className='text-sm font-medium text-neutral-600 dark:text-gray-400'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What We Do Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='space-y-12'
        >
          <div className='text-center'>
            <h2 className='mb-6 text-3xl font-bold text-black sm:text-4xl dark:text-white'>
              What We Do
            </h2>
            <p className='mx-auto max-w-3xl text-lg text-neutral-600 sm:text-xl dark:text-gray-400'>
              We are responsible for both the digital face and the technical
              infrastructure of the club’s online presence. Our work is split
              between creative marketing and hands-on web development.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className='group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 dark:border-neutral-800 dark:bg-[#111111] dark:hover:border-yellow-500/50'
              >
                <div className='mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 transition-transform group-hover:scale-110 dark:bg-gray-800/50'>
                  {item.icon}
                </div>
                <h3 className='mb-4 text-2xl font-bold text-black dark:text-white'>
                  {item.title}
                </h3>
                <p className='leading-relaxed text-neutral-600 dark:text-gray-400'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Photos */}
          <div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3'>
            {[
              {
                src: '/images/marketing/social-post.jpg',
                alt: 'Social Post Image',
              },
              {
                src: '/images/marketing/website.png',
                alt: 'Website Screenshot',
              },
              {
                src: '/images/marketing/team-photo.jpg',
                alt: 'Team Photo',
              },
            ].map((img, i) => (
              <div
                key={i}
                className='group relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/50'
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 z-10 bg-yellow-500/10 transition-colors group-hover:bg-transparent' />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        {teamsData['marketing'].projects && (
          <SectionCard id='marketing-projects'>
            <div className='mx-auto mb-8 flex w-full max-w-2xl flex-col items-center justify-center text-center'>
              <Pill className='mb-6 border-yellow-300 bg-yellow-400 text-black'>
                Development
              </Pill>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl dark:text-white'>
                We build the <span className='text-yellow-500'>official</span>{' '}
                GDG Website!
              </h2>
              <p className='text-lg text-neutral-600 dark:text-neutral-400'>
                Alongside our creative marketing efforts, our developers handle
                the design, architecture, and deployment of the GDG McMaster
                platform.
              </p>
            </div>
            <div className='flex flex-wrap items-stretch justify-center gap-6'>
              {teamsData['marketing'].projects.map((project, idx) => (
                <div key={idx} className='w-full max-w-sm'>
                  <Card
                    title={project.name}
                    description={project.description}
                    className='h-full'
                    CTA={
                      <div className='flex gap-4'>
                        {project.repo && (
                          <Link
                            href={project.repo}
                            target='_blank'
                            className='flex items-center gap-2 text-sm font-semibold hover:underline'
                          >
                            <FiGithub /> Repo
                          </Link>
                        )}
                        {project.link && (
                          <Link
                            href={project.link}
                            target='_blank'
                            className='flex items-center gap-2 text-sm font-semibold hover:underline'
                          >
                            <FiLink /> Demo
                          </Link>
                        )}
                      </div>
                    }
                  >
                    <div className='mt-2 w-fit text-xs font-bold uppercase tracking-wider text-neutral-500'>
                      {project.status}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

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
                Because our team handles both creative and technical projects,
                we operate collaboratively across different skill sets. Content
                creators and designers focus on social strategy, video
                production, and graphic design, while our web developers focus
                on front-end and back-end architecture for our platforms.
              </p>
            </div>

            {/* Timeline */}
            <div className='relative py-12'>
              <div className='absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 bg-gradient-to-r from-neutral-200 via-yellow-500/50 to-neutral-200 md:block dark:from-gray-800 dark:via-yellow-800 dark:to-gray-800' />
              <div className='grid gap-8 md:grid-cols-5'>
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className='relative z-10 flex flex-col items-center'
                  >
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-500 bg-white text-xl font-bold shadow-[0_0_15px_rgba(234,179,8,0.3)] dark:bg-gray-900'>
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
            Whether you&apos;re a creative who loves building a brand on social
            media or a developer passionate about building scalable web
            applications, the Marketing & Branding team has a spot for you. We
            are always looking for graphic designers, content creators, and
            full-stack developers to help us grow.
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <a
              href='https://discord.gg/XtYqWmJmh7'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-yellow-400 px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all hover:scale-105 hover:bg-yellow-300 active:scale-95'
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
