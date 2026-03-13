import Image from 'next/image'
import Link from 'next/link'
import {
  FiCalendar,
  FiGithub,
  FiInstagram,
  FiLink,
  FiLinkedin,
  FiMapPin,
} from 'react-icons/fi'
import { TeamData } from '../lib/teamData'
import AdminTeamSection from './AdminTeamSection'
import AnimatedHero from './AnimatedHero'
import Card from './Card'
import HackathonTeamSection from './HackathonTeamSection'
import MemberCard from './MemberCard'
import OpenSourceProjectsSection from './OpenSourceProjectsSection'
import Pill from './Pill'
import SectionCard from './SectionCard'

interface TeamTemplateProps {
  team: TeamData
}

const colorMap: Record<string, Record<string, string>> = {
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600 dark:text-purple-400',
    borderHover: 'hover:border-purple-500/50',
    shadowHover: 'hover:shadow-purple-500/10',
  },
  red: {
    bg: 'bg-red-500',
    text: 'text-red-500 dark:text-red-400',
    borderHover: 'hover:border-red-500/50',
    shadowHover: 'hover:shadow-red-500/10',
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    borderHover: 'hover:border-blue-500/50',
    shadowHover: 'hover:shadow-blue-500/10',
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-600 dark:text-green-400',
    borderHover: 'hover:border-green-500/50',
    shadowHover: 'hover:shadow-green-500/10',
  },
  yellow: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-600 dark:text-yellow-400',
    borderHover: 'hover:border-yellow-500/50',
    shadowHover: 'hover:shadow-yellow-500/10',
  },
}

const TeamTemplate = ({ team }: TeamTemplateProps) => {
  const colorBase = team.color.split('-')[0] || 'blue'
  const styles = colorMap[colorBase] || colorMap['blue']
  return (
    <div className='flex flex-col gap-y-8'>
      {/* Hero Section */}
      <AnimatedHero
        id={`${team.id}-hero`}
        className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
      >
        <div className='flex w-full flex-col items-center'>
          <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
            <Pill className={`${styles.bg} text-white dark:text-white`}>
              {team.name} Team
            </Pill>
            <h1>{team.description}</h1>
            <p className='text-lg text-neutral-600 dark:text-neutral-400'>
              {team.overview}
            </p>
          </div>
        </div>
      </AnimatedHero>

      {/* Projects Section (if exists) */}
      {team.projects && team.projects.length > 0 && (
        <SectionCard
          id='projects'
          title='Projects'
          description='What we are working on'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {team.projects.map((project, idx) => (
              <Card
                key={idx}
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
                <div className='mt-2 text-sm text-xs font-bold uppercase tracking-wider text-neutral-500'>
                  {project.status}
                </div>
              </Card>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Events Section (if exists) */}
      {team.events && team.events.length > 0 && (
        <SectionCard
          id='events'
          title='Events'
          description='Join us at our upcoming events'
        >
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {team.events.map((event, idx) => {
              return (
                <div
                  key={idx}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 ${styles.borderHover} hover:shadow-2xl ${styles.shadowHover} dark:border-neutral-800 dark:bg-[#111111] dark:${styles.borderHover}`}
                >
                  {/* Cover Image (16:9 ratio) */}
                  <div className='relative aspect-video w-full overflow-hidden border-b border-neutral-100 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900'>
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      />
                    ) : (
                      <div className='flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 p-6 text-center dark:from-neutral-800 dark:to-neutral-900'>
                        <FiCalendar className='mb-2 text-4xl text-neutral-400 dark:text-neutral-600' />
                      </div>
                    )}
                    {/* Subtle dark overlay gradient for polish */}
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent mix-blend-multiply dark:from-black/20 dark:mix-blend-normal' />
                  </div>

                  {/* Content Bottom Info */}
                  <div className='flex flex-1 flex-col p-6'>
                    <h3 className='mb-2 line-clamp-2 text-xl font-bold text-black dark:text-white'>
                      {event.name}
                    </h3>

                    <div
                      className={`mb-4 flex flex-col gap-1 text-sm font-medium ${styles.text}`}
                    >
                      <div className='flex items-center gap-2'>
                        <FiCalendar /> {event.date}
                      </div>
                      <div className='flex items-center gap-2'>
                        <FiMapPin /> {event.location}
                      </div>
                    </div>

                    <p className='mb-6 line-clamp-3 w-full flex-grow text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
                      {event.description}
                    </p>

                    {/* Footer Action Button */}
                    {event.link && (
                      <div className='mt-auto pt-4'>
                        <Link
                          href={event.link}
                          target='_blank'
                          className='group/btn flex w-full items-center justify-center gap-x-2 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-black active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-neutral-200'
                        >
                          <FiLink className='text-lg transition-transform group-hover/btn:scale-110' />
                          Learn More
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </SectionCard>
      )}

      {/* Socials / Marketing (if exists) */}
      {team.socials && team.socials.length > 0 && (
        <SectionCard
          id='connect'
          title='Connect'
          description='Follow us on social media'
        >
          <div className='flex flex-wrap justify-center gap-4'>
            {team.socials.map((social, idx) => {
              const Icon = social.name.toLowerCase().includes('instagram')
                ? FiInstagram
                : social.name.toLowerCase().includes('linkedin')
                  ? FiLinkedin
                  : FiLink
              return (
                <Link
                  key={idx}
                  href={social.url}
                  target='_blank'
                  className='flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                >
                  <Icon /> {social.name}
                </Link>
              )
            })}
          </div>
        </SectionCard>
      )}

      {/* Conditionally render Hackathon Team Section for Conferences team */}
      {team.id === 'conferences' && <HackathonTeamSection color={team.color} />}

      {/* Conditionally render Open Source Projects Section for Open Source team */}
      {team.id === 'open-source' && <OpenSourceProjectsSection />}

      {/* Conditionally render Admin custom sections for Admin team */}
      {team.id === 'admin' && <AdminTeamSection />}

      {/* Team Members Section */}
      <SectionCard
        id='members'
        title='Team Members'
        description='The people behind the magic'
      >
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
          {team.members.map((member, idx) => (
            <MemberCard
              key={idx}
              Image={
                member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={224}
                    className='h-56 w-56 overflow-hidden rounded-md object-cover'
                  />
                ) : (
                  <div className='h-56 w-56 rounded-md bg-neutral-200 dark:bg-neutral-800' />
                )
              }
              Content={
                <>
                  <span className='text-lg font-semibold'>{member.name}</span>
                  <span className='text-base text-neutral-600 dark:text-neutral-400'>
                    {member.role}
                  </span>
                </>
              }
            />
          ))}
        </div>
      </SectionCard>

      <div className='flex justify-center pb-12'>
        <Link
          href='/teams'
          className='text-sm font-semibold text-neutral-600 hover:underline dark:text-neutral-400'
        >
          ← Back to Teams Overview
        </Link>
      </div>
    </div>
  )
}

export default TeamTemplate
