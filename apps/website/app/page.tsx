import { ChevronArrowButton } from '@/app/components/ChevronArrow'
import Header from '@/app/components/Header'
import Ticker from '@/app/components/Ticker'
import HeroAnimation from '@/assets/animations/HeroAnimation.gif'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  About,
  AboutCard,
  GeneralInfo,
  Newsletter,
  Project,
  Sponsor,
  Team,
  TeamItem,
} from '@/types/sanity'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import * as Icons from 'react-icons/md'
import AnimatedHero, { AnimatedHeroSvg } from './components/AnimatedHero'
import Banner from './components/Banner'
import Card from './components/Card'
import SectionCard from './components/SectionCard'
import Heart from './components/svgs/Heart'

export const metadata: Metadata = {
  title: 'Google Developer Group on Campus | McMaster University',
  description:
    'Google Developer Group on Campus at McMaster University bridges the gap between theory and practice through solving real-world problems.',
}

const HeroSection = async () => {
  const generalInfo: GeneralInfo = await client.fetch(
    `*[_type == 'generalInfo'][0]`,
  )

  if (!generalInfo) return null

  return (
    <div
      id='hero'
      className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
    >
      <AnimatedHero
        className='flex flex-col justify-start gap-y-4 md:w-2/3'
        id='hero-content'
      >
        <h1 className='hero-title'>{generalInfo.club && generalInfo.club}</h1>
        <h5>{generalInfo.school && generalInfo.school}</h5>
        <p>{generalInfo.description && generalInfo.description}</p>
        <div className='flex flex-row gap-x-4'>
          {generalInfo.cta1 && (
            <Link href={generalInfo.cta1.href}>
              <ChevronArrowButton className='dark:bg-white-00 bg-black-00 dark:text-black-00 text-white-00 dark:border-black-00 border-white-00 border-2'>
                <span className='font-semibold'>{generalInfo.cta1.label}</span>
              </ChevronArrowButton>
            </Link>
          )}
          {generalInfo.cta2 && (
            <Link href='/events' rel='norefferer'>
              <ChevronArrowButton className='dark:bg-black-00 bg-white-00 dark:text-white-00 dark:border-white-00 border-black-00 border-2'>
                <span className='font-semibold'>{generalInfo.cta2.label}</span>
              </ChevronArrowButton>
            </Link>
          )}
        </div>
      </AnimatedHero>
      <AnimatedHeroSvg className='md:w-1/3'>
        <Image
          src={HeroAnimation}
          alt='Roundtable'
          className='h-full w-full object-contain'
          unoptimized
        />
      </AnimatedHeroSvg>
    </div>
  )
}

const AboutUsSection = async () => {
  const about: About = await client.fetch(`*[_type == 'about'][0]`)
  const sponsors: Sponsor[] = await client.fetch(`*[_type == 'sponsor']`)

  if (!about) return null

  return (
    <SectionCard
      title={about.title}
      description={about.description}
      id='about-us'
    >
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        {about.cards &&
          about.cards.map((card: AboutCard) => {
            const IconComponent =
              Icons[card.icon as keyof typeof Icons] || Icons.MdHelp
            return (
              <Card
                key={card._key}
                title={card.title}
                description={card.description}
                icon={<IconComponent className='text-2xl' />}
                image={{
                  src: urlFor(card.image.asset).url(),
                  alt: `${card.title}`,
                }}
              />
            )
          })}
        <Card
          title='Sponsors'
          icon={<Icons.MdStar className='h-fit w-full text-2xl' />}
        >
          {sponsors && sponsors.length > 0 && (
            <div className='flex h-full items-center justify-center'>
              <Ticker>
                {sponsors.map((sponsor: Sponsor) => (
                  <li key={sponsor._id}>
                    <div className='relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32'>
                      <Image
                        src={urlFor(sponsor.logo.asset).url()}
                        alt={`${sponsor.name} logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </li>
                ))}
              </Ticker>
            </div>
          )}
        </Card>
      </div>
    </SectionCard>
  )
}

const EventsSection = async () => {
  return (
    <SectionCard
      title='Our Events'
      description='Check out some different ways to get involved'
      id='events'
    >
      <Link rel='noreferrer' href='/events'>
        <ChevronArrowButton className='dark:bg-white-00 bg-black-00 dark:text-black-00 text-white-00 dark:border-black-00 border-white-00 border-2'>
          <span className='font-semibold'>See Our Events</span>
        </ChevronArrowButton>
      </Link>
    </SectionCard>
  )
}

const NewslettersSection = async () => {
  const newsletters: Newsletter[] = await client.fetch(
    `*[_type == "newsletter"]`, // Fetch all newsletters first
  )

  if (!newsletters) return null

  // Function to convert slug (e.g., "january-2025") into a sortable value
  const parseSlug = (slug: { current: string }) => {
    const [month, year] = slug.current.split('-')
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ]
    return parseInt(year) * 12 + months.indexOf(month.toLowerCase())
  }

  // Sort newsletters by parsed slug value in descending order
  const sortedNewsletters = newsletters
    .sort((a, b) => parseSlug(b.slug) - parseSlug(a.slug))
    .slice(0, 3)

  return (
    <SectionCard
      id='newsletters'
      title='Our Newsletter'
      description='Stay up-to-date with the latest and greatest in everything tech'
    >
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {sortedNewsletters &&
          sortedNewsletters.map((newsletter: Newsletter) => (
            <Link
              href={`/newsletters/${newsletter.slug.current}`}
              key={newsletter._id}
            >
              <Card
                title={newsletter.title}
                description={newsletter.description}
                icon={<Icons.MdArticle className='text-2xl' />}
              />
            </Link>
          ))}
      </div>
    </SectionCard>
  )
}

const TeamSection: FC = async () => {
  const team: Team | null = await client.fetch(`*[_type == "team"][0]`)

  if (!team) return null

  return (
    <SectionCard id='team' title={team.title} description={team.description}>
      <div className={`grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3`}>
        {team.teams.map((teamItem: TeamItem, index: number) => {
          const isCoreTeam = teamItem.name === 'Core'
          const hasProjects = teamItem.projects && teamItem.projects.length > 0
          const isInfiniteCarousel = hasProjects && teamItem.projects
          const colSpanClass =
            hasProjects || isCoreTeam
              ? 'col-span-1 md:col-span-2 lg:col-span-3'
              : 'col-span-1'
          const IconComponent =
            Icons[teamItem.icon as keyof typeof Icons] || Icons.MdHelp
          if (isCoreTeam) {
            return (
              <Card key={index} className={colSpanClass}>
                <div className='flex h-fit w-full flex-col gap-y-6 p-6 text-start md:flex-row md:justify-between'>
                  <div className='flex flex-row items-center gap-x-2'>
                    <IconComponent className='text-2xl' />
                    <span className='text-black-00 dark:text-white-00'>
                      {teamItem.name}
                    </span>
                  </div>
                  {!hasProjects && (
                    <div>
                      <span className='text-black-00 dark:text-white-03'>
                        {teamItem.description}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            )
          }

          return (
            <div key={index} className={isInfiniteCarousel ? colSpanClass : ''}>
              <Card>
                <div className='flex h-fit w-full flex-col gap-y-6 p-6 text-start'>
                  <div className='flex flex-row items-center gap-x-2'>
                    <IconComponent className='text-2xl' />
                    <span className='text-black-00 dark:text-white-00'>
                      {teamItem.name}
                    </span>
                  </div>
                  {!hasProjects && (
                    <div>
                      <span className='text-black-03 dark:text-white-03'>
                        {teamItem.description}
                      </span>
                    </div>
                  )}
                  {isInfiniteCarousel && (
                    <>
                      {/* Active Projects Section */}
                      <div className='relative overflow-x-auto'>
                        <div className='flex flex-row space-x-4'>
                          {teamItem.projects
                            ?.filter((project) => project.status !== 'archived')
                            .map(
                              ({
                                _key,
                                name,
                                image,
                                link,
                                status,
                              }: Project) => (
                                <div
                                  className='flex flex-col gap-y-2'
                                  key={_key}
                                >
                                  <Link
                                    href={link}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    <div className='bg-white-03 dark:bg-black-03 flex h-40 w-40 items-center justify-center rounded-xl md:w-64'>
                                      {image ? (
                                        <Image
                                          src={urlFor(image.asset).url()}
                                          alt={name}
                                          width={150}
                                          height={150}
                                        />
                                      ) : (
                                        <Icons.MdCode
                                          size={200}
                                          className='text-2xl'
                                        />
                                      )}
                                    </div>
                                  </Link>
                                  <div className='flex w-40 flex-col items-center md:w-64'>
                                    <span className='max-w-full break-words text-center'>
                                      {name}
                                    </span>
                                    <span className='text-black-03 dark:text-white-03 text-sm'>
                                      {status === 'in-progress'
                                        ? 'In Progress'
                                        : 'Completed'}
                                    </span>
                                  </div>
                                </div>
                              ),
                            )}
                        </div>
                      </div>

                      {/* Archived Projects Section */}
                      {teamItem.projects?.some(
                        (project) => project.status === 'archived',
                      ) && (
                        <details className='group'>
                          <summary className='text-black-03 dark:text-white-03 flex cursor-pointer items-center gap-x-2 text-sm'>
                            <Icons.MdExpandMore className='transition-transform group-open:rotate-180' />
                            Archived Projects
                          </summary>
                          <div className='relative mt-4 overflow-x-auto'>
                            <div className='flex flex-row space-x-4'>
                              {teamItem.projects
                                ?.filter(
                                  (project) => project.status === 'archived',
                                )
                                .map(({ _key, name, image, link }: Project) => (
                                  <div
                                    className='flex flex-col gap-y-2'
                                    key={_key}
                                  >
                                    <Link
                                      href={link}
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <div className='bg-white-03 dark:bg-black-03 flex h-40 w-40 items-center justify-center rounded-xl md:w-64'>
                                        {image ? (
                                          <Image
                                            src={urlFor(image.asset).url()}
                                            alt={name}
                                            width={150}
                                            height={150}
                                          />
                                        ) : (
                                          <Icons.MdCode
                                            size={200}
                                            className='text-2xl'
                                          />
                                        )}
                                      </div>
                                    </Link>
                                    <div className='flex w-40 flex-col items-center md:w-64'>
                                      <span className='max-w-full break-words text-center'>
                                        {name}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </details>
                      )}
                    </>
                  )}
                </div>
              </Card>
            </div>
          )
        })}
      </div>
      <Link href={'/team'}>
        <ChevronArrowButton className='dark:bg-white-00 bg-black-00 dark:text-black-00 text-white-00 dark:border-black-00 border-white-00 border-2'>
          <span className='font-semibold'>Meet Our Team</span>
        </ChevronArrowButton>
      </Link>
    </SectionCard>
  )
}

const AnnouncementBanner: FC = async () => {
  // TO-DO:
  //   get header, link, button-text from sanity

  const heading = '🚀 Join the Solution Challenge 2025!'
  const link =
    'https://gdg.community.dev/events/details/google-gdg-on-campus-mcmaster-university-hamilton-canada-presents-gdg-on-campus-mcmaster-solutions-challenge-2025-info/'
  const buttonText = 'Learn More'

  return <Banner heading={heading} link={link} buttonText={buttonText} />
}

const ThankYouSection = () => {
  return (
    <SectionCard
      id='thank-you'
      title='Our Appreciation'
      description='Thanks for visiting'
    >
      <div className='flex flex-row items-center'>
        Made with&nbsp;
        <Heart width={20} height={20} />
        &nbsp;by your GDG McMasterU M&B Team
      </div>
    </SectionCard>
  )
}

export default async function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AnnouncementBanner />
        <AboutUsSection />
        <EventsSection />
        <NewslettersSection />
        <TeamSection />
        <ThankYouSection />
      </main>
    </>
  )
}
