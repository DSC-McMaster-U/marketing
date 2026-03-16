import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiLink, FiMail } from 'react-icons/fi'
import Card from './Card'
import Pill from './Pill'
import SectionCard from './SectionCard'

interface HackathonTeamSectionProps {
  color?: string
}

const colorMap: Record<string, Record<string, string>> = {
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-500/20',
    bgLight: 'bg-purple-50/50 dark:bg-purple-900/10',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  red: {
    bg: 'bg-red-500',
    text: 'text-red-500 dark:text-red-400',
    border: 'border-red-500/20',
    bgLight: 'bg-red-50/50 dark:bg-red-900/10',
    button: 'bg-red-600 hover:bg-red-700',
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-500/20',
    bgLight: 'bg-blue-50/50 dark:bg-blue-900/10',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-500/20',
    bgLight: 'bg-green-50/50 dark:bg-green-900/10',
    button: 'bg-green-600 hover:bg-green-700',
  },
  yellow: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-600 dark:text-yellow-400',
    border: 'border-yellow-500/20',
    bgLight: 'bg-yellow-50/50 dark:bg-yellow-900/10',
    button: 'bg-yellow-600 hover:bg-yellow-700',
  },
}

const HackathonTeamSection = ({
  color = 'purple',
}: HackathonTeamSectionProps) => {
  const colorBase = color.split('-')[0] || 'purple'
  const styles = colorMap[colorBase] || colorMap['purple']
  return (
    <div className='flex w-full flex-col gap-y-16'>
      {/* Overview Section */}
      <SectionCard id='hackathon-overview'>
        <div className='flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12'>
          {/* Text Content */}
          <div className='flex flex-1 flex-col justify-center gap-y-6'>
            <div>
              <Pill className={`mb-4 ${styles.bg} text-white dark:text-white`}>
                Hackathon Team
              </Pill>
              <h2 className='mb-4 text-3xl font-bold text-black md:text-4xl dark:text-white'>
                GDG McMaster Conferences Team
              </h2>
            </div>
            <div className='flex flex-col gap-y-6 text-lg text-neutral-600 dark:text-neutral-400'>
              <p>
                The GDG McMaster Conferences Team is primarily focused on
                organizing and running our software-based yearly hackathon - the
                &apos;Mac-a-Thon&apos;. Geared towards students in any secondary
                or post-secondary institution, the Mac-a-Thon aims to enable
                hackers with both educational and networking opportunities
                across a
                <span className={`font-bold ${styles.text}`}> 48 hour </span>{' '}
                event schedule. With{' '}
                <span className={`font-bold ${styles.text}`}>3 </span>{' '}
                successful hackathons (fact check) already under our belt, we
                are looking to grow our event and expand our reach into 2027 and
                beyond with new events, workshops and networking opportunities!
              </p>
              <h3 className='mt-4 text-2xl font-semibold text-black dark:text-white'>
                About Mac-a-Thon
              </h3>
              <p>
                In 2026, GDG McMaster hosted its largest hackathon yet with over{' '}
                <span className={`font-bold ${styles.text}`}>
                  800 applicants
                </span>
                and nearly{' '}
                <span className={`font-bold ${styles.text}`}>70 projects</span>{' '}
                submitted across a wide range of topics and using several
                technology stacks. Students were able to engage in almost a{' '}
                <span className={`font-bold ${styles.text}`}>dozen</span>{' '}
                different events and workshops throughout the event on a variety
                of subjects like artificial intelligence, cloud fundamentals and
                full stack app development. Our flagship workshop,
                &apos;Devpardy&apos;, featured{' '}
                <Link
                  href='https://www.youtube.com/@CodingJesus'
                  target='_blank'
                  className={`font-semibold ${styles.text} hover:underline`}
                >
                  CodingJesus
                </Link>
                &apos;s and his{' '}
                <Link
                  href='https://getcracked.io'
                  target='_blank'
                  className={`font-semibold ${styles.text} hover:underline`}
                >
                  getcracked.io
                </Link>{' '}
                technical interview preparation platform where students competed
                to answer the most of his challenging set of computer
                science-based questions.
              </p>
              <p>
                The Mac-a-Thon is more than just a hackathon - it is about the
                growing community of like-minded individuals both within
                McMaster and beyond. Whether it is your first time competing in
                a hackathon, finding other hackers interested in your project or
                debugging your &quot;million-dollar&quot; project idea late at
                night, there is something for everyone, regardless of skill or
                programming background, at the Mac-a-Thon.
              </p>
            </div>
          </div>

          {/* Image Layout */}
          <div className='flex flex-1 flex-col gap-y-4'>
            {/* Group Picture */}
            <div className='relative aspect-video w-full overflow-hidden rounded-xl shadow-sm'>
              <Image
                src='/images/group-photo.png'
                alt='Mac-a-Thon Group Picture'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex gap-x-4'>
              <div className='relative aspect-square w-1/2 overflow-hidden rounded-xl shadow-sm'>
                <Image
                  src='/images/ceremony-photo.jpg'
                  alt='Mac-a-Thon Ceremony'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative aspect-square w-1/2 overflow-hidden rounded-xl shadow-sm'>
                <Image
                  src='/images/workshop-photo.jpg'
                  alt='Mac-a-Thon Workshop'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Stats Section */}
      <SectionCard id='hackathon-stats' title='Impact' description='Stats'>
        <div className='mx-auto grid w-full max-w-7xl auto-rows-fr grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-6'>
          {/* Stat 1 */}
          <Card className='h-full w-full !p-0 md:col-span-2'>
            <div className='flex h-full w-full flex-col items-center justify-start pb-10 text-center'>
              <div className='relative mb-8 aspect-[4/3] w-full overflow-hidden'>
                <Image
                  src='/images/hackers.jpg'
                  alt='Hackers at Mac-a-Thon'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-grow flex-col justify-end px-6'>
                <div className='mb-3 text-5xl font-black text-black md:text-6xl dark:text-white'>
                  800+
                </div>
                <div className='text-base font-semibold uppercase tracking-widest text-neutral-500'>
                  applicants or
                  <br />
                  250+ hackers
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 2 */}
          <Card className='h-full w-full !p-0 md:col-span-2'>
            <div className='flex h-full w-full flex-col items-center justify-start pb-8 text-center'>
              <div className='relative mb-6 aspect-[4/3] w-full overflow-hidden'>
                <Image
                  src='/images/project-demo.jpg'
                  alt='Project Demo at Mac-a-Thon'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-grow flex-col justify-end px-6'>
                <div className='mb-3 text-5xl font-black text-black md:text-6xl dark:text-white'>
                  60+
                </div>
                <div className='text-base font-semibold uppercase tracking-widest text-neutral-500'>
                  projects
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 3 */}
          <Card className='h-full w-full !p-0 md:col-span-2 md:col-start-2 lg:col-start-5'>
            <div className='flex h-full w-full flex-col items-center justify-start pb-10 text-center'>
              <div className='relative mb-8 aspect-[4/3] w-full overflow-hidden'>
                <Image
                  src='/images/hacking-in-progress.jpg'
                  alt='Hacking in Progress at Mac-a-Thon'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-grow flex-col justify-end px-6'>
                <div className='mb-3 text-5xl font-black text-black md:text-6xl dark:text-white'>
                  48
                </div>
                <div className='text-base font-semibold uppercase tracking-widest text-neutral-500'>
                  hours of hacking
                  <br />
                  and innovation
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 4 */}
          <Card className='h-full w-full !p-0 md:col-span-2 lg:col-start-2'>
            <div className='flex h-full w-full flex-col items-center justify-start pb-10 text-center'>
              <div className='relative mb-8 aspect-[4/3] w-full overflow-hidden'>
                <Image
                  src='/images/workshops-stat.jpg'
                  alt='Workshops at Mac-a-Thon'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-grow flex-col justify-end px-6'>
                <div className='mb-3 text-5xl font-black text-black md:text-6xl dark:text-white'>
                  10
                </div>
                <div className='text-base font-semibold uppercase tracking-widest text-neutral-500'>
                  workshops
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 5 */}
          <Card className='h-full w-full !p-0 md:col-span-2'>
            <div className='flex h-full w-full flex-col items-center justify-start pb-10 text-center'>
              <div className='relative mb-8 aspect-[4/3] w-full overflow-hidden'>
                <Image
                  src='/images/prizes.jpg'
                  alt='Prize Winner at Mac-a-Thon'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-grow flex-col justify-end px-6'>
                <div className='mb-3 text-5xl font-black text-black md:text-6xl dark:text-white'>
                  15+
                </div>
                <div className='text-base font-semibold uppercase tracking-widest text-neutral-500'>
                  prize tiers and
                  <br />
                  giveaways
                </div>
              </div>
            </div>
          </Card>
        </div>
      </SectionCard>

      {/* Description & Socials */}
      <SectionCard
        id='hackathon-join'
        title='Team Description'
        description='Join the Team'
      >
        <div className='mx-auto flex w-full max-w-4xl flex-col items-center gap-y-8 text-center'>
          <p className='text-lg text-neutral-600 dark:text-neutral-400'>
            The hackathon team primarily focuses on the logistics and
            hacker-facing operations of the Mac-a-Thon from planning to
            execution. From working with sponsors and campus committees to
            planning fun events and managing our internal software stack, there
            is something for everyone!
          </p>
          <p className='text-lg text-neutral-600 dark:text-neutral-400'>
            If you are interested in joining the team, make sure to follow us on
            our
            <Link
              href='#'
              className={`font-semibold ${styles.text} mx-1 hover:underline`}
            >
              Instagram
            </Link>
            and join our
            <Link
              href='#'
              className={`font-semibold ${styles.text} mx-1 hover:underline`}
            >
              Discord
            </Link>
            where details on the application process will be announced soon!
          </p>

          <div className='mt-4 flex flex-wrap justify-center gap-4'>
            <Link
              href='https://www.instagram.com/gdgmcmaster/'
              target='_blank'
              className='flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'
            >
              <FiInstagram /> Instagram
            </Link>
            <Link
              href='https://discord.gg/XtYqWmJmh7'
              target='_blank'
              className='flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'
            >
              {/* Placeholder discord icon via generic Link since FiDiscord is not imported or available in default bundle usually without specific react-icons/fa. We will use a link icon as backup. */}
              <FiLink /> Discord
            </Link>
          </div>
        </div>
      </SectionCard>

      {/* Sponsorship CTA */}
      <div
        className={`border-2 ${styles.border} ${styles.bgLight} overflow-hidden rounded-xl`}
      >
        <SectionCard id='hackathon-sponsor'>
          <div className='flex w-full flex-col gap-y-12 lg:flex-row-reverse lg:items-center lg:gap-x-12'>
            <div className='flex flex-1 flex-col gap-y-6'>
              <h3 className='text-3xl font-bold text-black dark:text-white'>
                Interested in Sponsoring the Mac-a-Thon?
              </h3>
              <p className='text-lg text-neutral-600 dark:text-neutral-400'>
                Are you interested in sponsoring the Mac-a-Thon? We&apos;d love
                to partner with you, whether you are looking to recruit one of
                our amazing hackers, showcase your API or support the next
                generation of engineers and developers. Please reach out to us
                at gdsc@mcmaster.ca if you are interested in sponsoring the
                Mac-a-Thon on one of our sponsorship tiers!
              </p>
              <div className='mt-4'>
                <Link
                  href='mailto:gdsc@mcmaster.ca'
                  className={`inline-flex items-center justify-center gap-2 rounded-xl ${styles.button} px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105`}
                >
                  <FiMail className='text-xl' /> gdsc@mcmaster.ca
                </Link>
              </div>
            </div>

            <div className='flex flex-1 items-center justify-center'>
              {/* Sponsor collage */}
              <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm'>
                <Image
                  src='/images/sponsor-collage.png'
                  alt='Mac-a-Thon Sponsors'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}

export default HackathonTeamSection
