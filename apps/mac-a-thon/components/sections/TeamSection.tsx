import MeetTheTeamMarquee from '@/components/TeamMarquee'
import { client } from '@/sanity/lib/client'
import { TeamMember } from '@/types/sanity'
import Image from 'next/image'

const TeamSection = async () => {
  const teamMembers: TeamMember[] = await client.fetch(`*[_type=="teamMember"]`)

  if (!teamMembers.length) return null

  return (
    <section
      id='team'
      className='relative min-h-[400px] w-full max-w-none overflow-x-hidden bg-[#A3D8F4] p-0 md:min-h-[600px]'
    >
      <Image
        src='/assets/meet-the-team-background.png'
        alt='Meet the Team Background'
        fill
        priority
        className='object-cover object-top'
      />

      <MeetTheTeamMarquee teamMembers={teamMembers} />
    </section>
  )
}

export default TeamSection
