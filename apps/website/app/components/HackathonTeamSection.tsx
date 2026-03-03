import Image from 'next/image'
import Link from 'next/link'
import {
  FiInstagram,
  FiLink,
  FiMail
} from 'react-icons/fi'
import Card from './Card'
import Pill from './Pill'
import SectionCard from './SectionCard'

const HackathonTeamSection = () => {
  return (
    <div className="flex w-full flex-col gap-y-16">
      {/* Overview Section */}
      <SectionCard id="hackathon-overview">
        <div className="flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12">
          {/* Text Content */}
          <div className="flex flex-1 flex-col justify-center gap-y-6">
            <div>
              <Pill className="mb-4 bg-purple-500">Hackathon Team</Pill>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-black dark:text-white">
                GDG McMaster Conferences Team
              </h2>
            </div>
            <div className="flex flex-col gap-y-6 text-lg text-neutral-600 dark:text-neutral-400">
              <p>
                The GDG McMaster Conferences Team is primarily focused on organizing and
                running our software-based yearly hackathon - the &apos;Mac-a-Thon&apos;. Geared towards
                students in any secondary or post-secondary institution, the Mac-a-Thon aims
                to enable hackers with both educational and networking opportunities across a
                <span className="font-bold text-purple-600 dark:text-purple-400"> 48 hour </span> event schedule. With <span className="font-bold text-purple-600 dark:text-purple-400">3 </span> successful hackathons (fact check) already under
                our belt, we are looking to grow our event and expand our reach into 2027 and
                beyond with new events, workshops and networking opportunities!
              </p>
              <h3 className="text-2xl font-semibold text-black dark:text-white mt-4">
                About Mac-a-Thon
              </h3>
              <p>
                In 2026, GDG McMaster hosted its largest hackathon yet with over <span className="font-bold text-purple-600 dark:text-purple-400">800 applicants</span>
                and nearly <span className="font-bold text-purple-600 dark:text-purple-400">70 projects</span> submitted across a wide range of topics and using several
                technology stacks. Students were able to engage in almost a <span className="font-bold text-purple-600 dark:text-purple-400">dozen</span> different events
                and workshops throughout the event on a variety of subjects like artificial
                intelligence, cloud fundamentals and full stack app development. Our flagship
                workshop, &apos;Devpardy&apos;, featured <Link href="https://www.youtube.com/@CodingJesus" target="_blank" className="font-semibold text-purple-600 hover:underline dark:text-purple-400">CodingJesus</Link>&apos;s and his <Link href="https://getcracked.io" target="_blank" className="font-semibold text-purple-600 hover:underline dark:text-purple-400">getcracked.io</Link> technical interview preparation platform where students competed to
                answer the most of his challenging set of computer science-based questions.
              </p>
              <p>
                The Mac-a-Thon is more than just a hackathon - it is about the growing
                community of like-minded individuals both within McMaster and beyond. Whether
                it is your first time competing in a hackathon, finding other hackers interested
                in your project or debugging your &quot;million-dollar&quot; project idea late at night,
                there is something for everyone, regardless of skill or programming background,
                at the Mac-a-Thon.
              </p>
            </div>
          </div>

          {/* Image Layout */}
          <div className="flex flex-1 flex-col gap-y-4">
            {/* Group Picture */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-sm">
              <Image
                src="/images/group-photo.png"
                alt="Mac-a-Thon Group Picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-x-4">
              <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/images/ceremony-photo.jpg"
                  alt="Mac-a-Thon Ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl shadow-sm">
                <Image
                  src="/images/workshop-photo.jpg"
                  alt="Mac-a-Thon Workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Stats Section */}
      <SectionCard
        id="hackathon-stats"
        title="Impact"
        description="Stats"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-fr w-full max-w-7xl mx-auto">
          {/* Stat 1 */}
          <Card className="!p-0 h-full w-full md:col-span-2">
            <div className="flex flex-col items-center justify-start text-center w-full h-full pb-10">
              <div className="mb-8 aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src="/images/hackers.jpg"
                  alt="Hackers at Mac-a-Thon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 flex flex-col justify-end flex-grow">
                <div className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
                  800+
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-base font-semibold">
                  applicants or<br />250+ hackers
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 2 */}
          <Card className="!p-0 h-full w-full md:col-span-2">
            <div className="flex flex-col items-center justify-start text-center w-full h-full pb-8">
              <div className="mb-6 aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src="/images/project-demo.jpg"
                  alt="Project Demo at Mac-a-Thon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 flex flex-col justify-end flex-grow">
                <div className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
                  60+
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-base font-semibold">
                  projects
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 3 */}
          <Card className="!p-0 h-full w-full md:col-span-2 md:col-start-2 lg:col-start-5">
            <div className="flex flex-col items-center justify-start text-center w-full h-full pb-10">
              <div className="mb-8 aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src="/images/hacking-in-progress.jpg"
                  alt="Hacking in Progress at Mac-a-Thon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 flex flex-col justify-end flex-grow">
                <div className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
                  48
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-base font-semibold">
                  hours of hacking<br />and innovation
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 4 */}
          <Card className="!p-0 h-full w-full md:col-span-2 lg:col-start-2">
            <div className="flex flex-col items-center justify-start text-center w-full h-full pb-10">
              <div className="mb-8 aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src="/images/workshops-stat.jpg"
                  alt="Workshops at Mac-a-Thon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 flex flex-col justify-end flex-grow">
                <div className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
                  10
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-base font-semibold">
                  workshops
                </div>
              </div>
            </div>
          </Card>

          {/* Stat 5 */}
          <Card className="!p-0 h-full w-full md:col-span-2">
            <div className="flex flex-col items-center justify-start text-center w-full h-full pb-10">
              <div className="mb-8 aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src="/images/prizes.jpg"
                  alt="Prize Winner at Mac-a-Thon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 flex flex-col justify-end flex-grow">
                <div className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
                  15+
                </div>
                <div className="text-neutral-500 uppercase tracking-widest text-base font-semibold">
                  prize tiers and<br />giveaways
                </div>
              </div>
            </div>
          </Card>
        </div>
      </SectionCard>

      {/* Description & Socials */}
      <SectionCard
        id="hackathon-join"
        title="Team Description"
        description="Join the Team"
      >
        <div className="flex flex-col w-full max-w-4xl items-center text-center mx-auto gap-y-8">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            The hackathon team primarily focuses on the logistics and hacker-facing operations of
            the Mac-a-Thon from planning to execution. From working with sponsors and campus
            committees to planning fun events and managing our internal software stack, there is
            something for everyone!
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            If you are interested in joining the team, make sure to follow us on our
            <Link href="#" className="font-semibold text-purple-600 hover:underline dark:text-purple-400 mx-1">Instagram</Link>
            and join our
            <Link href="#" className="font-semibold text-purple-600 hover:underline dark:text-purple-400 mx-1">Discord</Link>
            where details on the application process will be announced soon!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="https://www.instagram.com/gdgmcmaster/"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <FiInstagram /> Instagram
            </Link>
            <Link
              href="https://discord.gg/XtYqWmJmh7"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-neutral-100 px-6 py-3 text-lg font-semibold transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              {/* Placeholder discord icon via generic Link since FiDiscord is not imported or available in default bundle usually without specific react-icons/fa. We will use a link icon as backup. */}
              <FiLink /> Discord
            </Link>
          </div>
        </div>
      </SectionCard>

      {/* Sponsorship CTA */}
      <div className="border-2 border-purple-500/20 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl overflow-hidden">
        <SectionCard
          id="hackathon-sponsor"
        >
          <div className="flex w-full flex-col gap-y-12 lg:flex-row-reverse lg:gap-x-12 lg:items-center">
            <div className="flex flex-1 flex-col gap-y-6">
              <h3 className="text-3xl font-bold text-black dark:text-white">
                Interested in Sponsoring the Mac-a-Thon?
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Are you interested in sponsoring the Mac-a-Thon? We&apos;d love to partner with you,
                whether you are looking to recruit one of our amazing hackers, showcase your API
                or support the next generation of engineers and developers. Please reach out to us
                at gdsc@mcmaster.ca if you are interested in sponsoring the Mac-a-Thon on one of
                our sponsorship tiers!
              </p>
              <div className="mt-4">
                <Link
                  href="mailto:gdsc@mcmaster.ca"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-purple-700 hover:scale-105"
                >
                  <FiMail className="text-xl" /> gdsc@mcmaster.ca
                </Link>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              {/* Sponsor collage */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/images/sponsor-collage.png"
                  alt="Mac-a-Thon Sponsors"
                  fill
                  className="object-contain"
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
