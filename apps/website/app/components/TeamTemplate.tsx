import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar, FiGithub, FiInstagram, FiLink, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { TeamData } from '../lib/teamData'
import AnimatedHero from './AnimatedHero'
import Card from './Card'
import MemberCard from './MemberCard'
import Pill from './Pill'
import SectionCard from './SectionCard'

interface TeamTemplateProps {
  team: TeamData
}

const TeamTemplate = ({ team }: TeamTemplateProps) => {
  return (
    <div className="flex flex-col gap-y-8">
      {/* Hero Section */}
      <AnimatedHero
        id={`${team.id}-hero`}
        className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28"
      >
        <div className="flex w-full flex-col items-center">
          <div className="flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center">
            <Pill className={`bg-${team.color}`}>{team.name} Team</Pill>
            <h1>{team.description}</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {team.overview}
            </p>
          </div>
        </div>
      </AnimatedHero>

      {/* Projects Section (if exists) */}
      {team.projects && team.projects.length > 0 && (
        <SectionCard
          id="projects"
          title="Projects"
          description="What we are working on"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.projects.map((project, idx) => (
              <Card
                key={idx}
                title={project.name}
                description={project.description}
                className="h-full"
                CTA={
                  <div className="flex gap-4">
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-semibold hover:underline"
                      >
                        <FiGithub /> Repo
                      </Link>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-semibold hover:underline"
                      >
                        <FiLink /> Demo
                      </Link>
                    )}
                  </div>
                }
              >
                <div className="mt-2 text-sm uppercase tracking-wider text-xs font-bold text-neutral-500">
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
          id="events"
          title="Events"
          description="Join us at our upcoming events"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {team.events.map((event, idx) => (
              <Card
                key={idx}
                title={event.name}
                description={event.description}
                icon={<FiCalendar className="text-2xl" />}
                className="h-full"
                CTA={
                  event.link ? (
                    <Link
                      href={event.link}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-semibold hover:underline"
                    >
                      <FiLink /> Learn More
                    </Link>
                  ) : undefined
                }
              >
                <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar /> {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin /> {event.location}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionCard>
      )}

      {/* Socials / Marketing (if exists) */}
      {team.socials && team.socials.length > 0 && (
        <SectionCard
          id="connect"
          title="Connect"
          description="Follow us on social media"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {team.socials.map((social, idx) => {
               const Icon = social.name.toLowerCase().includes('instagram') ? FiInstagram :
                            social.name.toLowerCase().includes('linkedin') ? FiLinkedin : FiLink
               return (
                 <Link
                   key={idx}
                   href={social.url}
                   target="_blank"
                   className="flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                 >
                   <Icon /> {social.name}
                 </Link>
               )
            })}
          </div>
        </SectionCard>
      )}

      {/* Team Members Section */}
      <SectionCard
        id="members"
        title="Team Members"
        description="The people behind the magic"
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
                    className="h-56 w-56 overflow-hidden rounded-md object-cover"
                  />
                ) : (
                  <div className="h-56 w-56 rounded-md bg-neutral-200 dark:bg-neutral-800" />
                )
              }
              Content={
                <>
                  <span className="text-lg font-semibold">{member.name}</span>
                  <span className="text-base text-neutral-600 dark:text-neutral-400">
                    {member.role}
                  </span>
                </>
              }
            />
          ))}
        </div>
      </SectionCard>

       <div className="flex justify-center pb-12">
        <Link
          href="/teams"
          className="text-sm font-semibold hover:underline text-neutral-600 dark:text-neutral-400"
        >
          ← Back to Teams Overview
        </Link>
      </div>
    </div>
  )
}

export default TeamTemplate
