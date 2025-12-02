'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { urlFor } from '@/sanity/lib/image'
import { TeamMember } from '@/types/sanity'
import Image from 'next/image'

const TeamMarquee = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  const items = [...teamMembers, ...teamMembers]

  const TEAM_MAP: Record<string, string> = {
    marketingAndBranding: 'Marketing & Branding',
    admin: 'Admin',
    conferences: 'Conferences',
  }

  return (
    <div className='relative w-full overflow-hidden py-20 md:py-32'>
      <div className='animate-marquee flex whitespace-nowrap'>
        {items.map((member, i) => (
          <Tooltip key={member._id + i}>
            <TooltipTrigger asChild>
              <div
                className='animate-bob relative mx-10 flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center md:h-36 md:w-36'
                style={{
                  animationDelay: `${(i % teamMembers.length) * 0.3}s`,
                }}
              >
                <Image fill src='/assets/bubble.png' alt='' />

                <div className='relative h-12 w-12 md:h-20 md:w-20'>
                  {member.photo && (
                    <Image
                      fill
                      className='rounded-full object-cover'
                      src={urlFor(member.photo.asset).url()}
                      alt={`${member.firstName} ${member.lastName}`}
                    />
                  )}
                </div>
              </div>
            </TooltipTrigger>

            <TooltipContent side='top'>
              <p className='font-semibold'>
                {member.firstName} {member.lastName}
              </p>
              {member.subteam && (
                <p className='text-muted text-sm'>
                  {TEAM_MAP[member.subteam] || member.subteam}
                </p>
              )}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default TeamMarquee
