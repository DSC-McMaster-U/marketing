import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Member, Team, TeamItem } from '@/types/sanity'
import { Metadata } from 'next'
import Image from 'next/image'
import AnimatedHero from '../components/AnimatedHero'
import Header from '../components/Header'
import MemberCard from '../components/MemberCard'
import Pill from '../components/Pill'
import SectionCard from '../components/SectionCard'

export const metadata: Metadata = {
  title: 'Team | Google Developer Group on Campus | McMaster University',
  description:
    'Our team Google Developer Group on Campus | McMaster University',
}

const fetchTeam = async () => {
  const team = await client.fetch(`*[_type == 'team'][0]`)

  return team
}

const HeroSection = () => {
  return (
    <AnimatedHero
      id='hero'
      className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
    >
      <div className='flex w-full flex-col items-center'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
          <Pill>Our Team</Pill>
          <h2>Meet our team that keeps everything running behind the scenes</h2>
        </div>
      </div>
    </AnimatedHero>
  )
}

const TeamsSections = async () => {
  const team: Team = await fetchTeam()

  return (
    <>
      {team?.teams?.map((teamItem: TeamItem) => (
        <SectionCard
          key={teamItem._key}
          id={teamItem.name}
          description={teamItem.description}
          title={teamItem.name}
        >
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {teamItem?.members?.map((member: Member) => (
              <MemberCard
                key={member._key}
                Image={
                  <Image
                    src={urlFor(member.picture.asset).url()}
                    alt={member.name}
                    width={224}
                    height={224}
                    className='h-56 w-56 overflow-hidden rounded-md object-cover'
                  />
                }
                Content={
                  <>
                    <span className='text-lg font-semibold'>{member.name}</span>
                    <span className='text-base'>{member.position}</span>
                  </>
                }
              />
            ))}
          </div>
        </SectionCard>
      ))}
    </>
  )
}

const TeamPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TeamsSections />
      </main>
    </>
  )
}

export default TeamPage
