'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

interface TeamMember {
  id: string
  name: string
  subteam: string
  emoji?: string
  photoUrl?: string
}

// TODO: Replace with actual team data fetching
// You can use the GDG API similar to apps/website/app/lib/getTeam.ts
// or fetch from Sanity CMS if team data is stored there
const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Chen',
    subteam: 'Design',
    emoji: '🎨',
    photoUrl: undefined,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    subteam: 'Development',
    emoji: '💻',
    photoUrl: undefined,
  },
  {
    id: '3',
    name: 'Mike Zhang',
    subteam: 'Marketing',
    emoji: '📱',
    photoUrl: undefined,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    subteam: 'Design',
    emoji: '✨',
    photoUrl: undefined,
  },
  {
    id: '5',
    name: 'David Lee',
    subteam: 'Development',
    emoji: '🚀',
    photoUrl: undefined,
  },
  {
    id: '6',
    name: 'Lisa Park',
    subteam: 'Marketing',
    emoji: '📊',
    photoUrl: undefined,
  },
  {
    id: '7',
    name: 'Chris Brown',
    subteam: 'Design',
    emoji: '🎭',
    photoUrl: undefined,
  },
  {
    id: '8',
    name: 'Jordan Kim',
    subteam: 'Development',
    emoji: '⚡',
    photoUrl: undefined,
  },
  {
    id: '9',
    name: 'Taylor Swift',
    subteam: 'Marketing',
    emoji: '🎵',
    photoUrl: undefined,
  },
  {
    id: '10',
    name: 'Morgan Hill',
    subteam: 'Design',
    emoji: '🌈',
    photoUrl: undefined,
  },
  {
    id: '11',
    name: 'Casey Jones',
    subteam: 'Development',
    emoji: '🔥',
    photoUrl: undefined,
  },
]

interface BubbleProps {
  member?: TeamMember
  size: number
  left: number
  delay: number
  duration: number
  isHovered: boolean
  onHover: (id: string | null) => void
}

const Bubble = ({
  member,
  size,
  left,
  delay,
  duration,
  isHovered,
  onHover,
  bottom,
}: BubbleProps & { bottom?: number }) => {
  const bubbleRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={bubbleRef}
      className={cn(
        'absolute rounded-full border-2 border-blue-300/40 bg-blue-200/20 backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        isHovered && 'z-20 -translate-y-5 scale-110',
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...(isHovered
          ? {}
          : {
              animationName: 'floatUp',
              animationDuration: `${duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${delay}s`,
            }),
        bottom: member ? '35%' : bottom !== undefined ? `${bottom}%` : '20%',
        left: member ? `${left}%` : `${left}%`,
        right: 'auto',
      }}
      onMouseEnter={() => member && onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {member && (
        <div className='relative h-full w-full overflow-hidden rounded-full'>
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className='object-cover'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-blue-300/30 text-2xl'>
              {member.emoji || '👤'}
            </div>
          )}
        </div>
      )}
      {isHovered && member && (
        <div
          className='absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 transform whitespace-nowrap'
          style={{ animation: 'none' }}
        >
          <div className='rounded-lg border border-blue-200/50 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm'>
            <p className='text-sm font-semibold text-gray-800'>{member.name}</p>
            <p className='text-xs text-gray-600'>{member.subteam}</p>
            {member.emoji && (
              <p className='mt-1 text-center text-lg'>{member.emoji}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const Footer = () => {
  const [hoveredBubbleId, setHoveredBubbleId] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hoveredBubbleId) {
      setIsPaused(true)
    } else {
      setIsPaused(false)
    }
  }, [hoveredBubbleId])

  // Generate decorative bubbles (smaller ones) with fixed values to avoid hydration mismatch
  const decorativeBubbles = useMemo(() => {
    // Fixed values to ensure server/client consistency
    const fixedBubbles = [
      { size: 22.5, left: 8.3, delay: 1.2, duration: 7.4, bottom: 15.2 },
      { size: 18.7, left: 45.6, delay: 3.8, duration: 9.1, bottom: 28.4 },
      { size: 25.3, left: 72.1, delay: 0.5, duration: 6.8, bottom: 12.7 },
      { size: 20.1, left: 15.9, delay: 2.3, duration: 8.5, bottom: 35.6 },
      { size: 19.4, left: 88.7, delay: 4.1, duration: 7.9, bottom: 18.3 },
      { size: 23.8, left: 33.2, delay: 1.7, duration: 9.3, bottom: 22.9 },
      { size: 17.6, left: 67.4, delay: 3.2, duration: 6.5, bottom: 31.1 },
      { size: 21.9, left: 52.8, delay: 0.9, duration: 8.7, bottom: 14.6 },
      { size: 24.5, left: 26.3, delay: 2.8, duration: 7.2, bottom: 37.8 },
      { size: 18.2, left: 91.5, delay: 4.6, duration: 9.5, bottom: 19.4 },
      { size: 22.7, left: 11.4, delay: 1.4, duration: 6.9, bottom: 25.3 },
      { size: 19.8, left: 58.7, delay: 3.5, duration: 8.3, bottom: 16.7 },
      { size: 23.1, left: 39.6, delay: 0.7, duration: 7.6, bottom: 33.2 },
      { size: 17.3, left: 84.2, delay: 2.9, duration: 9.2, bottom: 21.5 },
      { size: 25.6, left: 6.8, delay: 4.3, duration: 6.4, bottom: 29.8 },
      { size: 20.4, left: 63.9, delay: 1.8, duration: 8.9, bottom: 13.9 },
      { size: 18.9, left: 29.1, delay: 3.7, duration: 7.1, bottom: 36.4 },
      { size: 24.2, left: 76.5, delay: 0.3, duration: 9.4, bottom: 17.2 },
      { size: 21.6, left: 47.3, delay: 2.6, duration: 6.7, bottom: 30.5 },
      { size: 19.1, left: 95.8, delay: 4.8, duration: 8.1, bottom: 24.7 },
    ]

    return fixedBubbles.map((bubble, i) => ({
      id: `dec-${i}`,
      ...bubble,
    }))
  }, [])

  // Main team bubbles (11 larger ones) - positioned in a row, floating up and down
  const teamBubbles = useMemo(() => {
    // Use fixed values to avoid hydration mismatch
    const fixedSizes = [70, 75, 68, 72, 73, 69, 71, 74, 70, 72, 68]
    const fixedDurations = [
      4.2, 3.8, 4.5, 3.9, 4.1, 4.3, 3.7, 4.0, 4.4, 3.6, 4.2,
    ]
    const fixedLefts = [10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90] // Fixed left positions

    return mockTeamMembers.map((member, index) => ({
      member,
      size: fixedSizes[index % fixedSizes.length],
      left: fixedLefts[index % fixedLefts.length], // Fixed left positions
      delay: Math.round(index * 0.3 * 10) / 10, // Round to 1 decimal place
      duration: fixedDurations[index % fixedDurations.length], // Fixed floating animation duration
    }))
  }, [])

  return (
    <footer className='relative !mx-0 w-full !max-w-none overflow-hidden !px-0'>
      {/* Underwater Background */}
      <div
        className='relative w-full'
        style={{
          minHeight: '652px',
          backgroundImage: `url('/assets/Gemini_Generated_Image_fubgq6fubgq6fubg 1_2025-11-16_07_23_09.582006.png 1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Light rays from top */}
        <div className='absolute inset-0 opacity-30'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className='absolute top-0 w-1 bg-white/40'
              style={{
                left: `${20 + i * 20}%`,
                height: '60%',
                transform: `rotate(${-2 + i * 1}deg)`,
                transformOrigin: 'top',
              }}
            />
          ))}
        </div>

        {/* Animated Bubbles Container */}
        <div
          ref={containerRef}
          className={cn(
            'absolute inset-0',
            isPaused && 'animation-play-state-paused',
          )}
        >
          {/* Decorative bubbles */}
          {decorativeBubbles.map((bubble) => (
            <Bubble
              key={bubble.id}
              size={bubble.size}
              left={bubble.left}
              delay={bubble.delay}
              duration={bubble.duration}
              bottom={bubble.bottom}
              isHovered={false}
              onHover={() => {}}
            />
          ))}

          {/* Team member bubbles */}
          {teamBubbles.map((bubble) => (
            <Bubble
              key={bubble.member.id}
              member={bubble.member}
              size={bubble.size}
              left={bubble.left}
              delay={bubble.delay}
              duration={bubble.duration}
              isHovered={hoveredBubbleId === bubble.member.id}
              onHover={setHoveredBubbleId}
            />
          ))}
        </div>

        {/* Center Text */}
        <div className='absolute bottom-20 left-1/2 z-10 -translate-x-1/2 transform'>
          <p className='text-center text-lg font-medium text-white drop-shadow-lg md:text-xl'>
            Made with <span className='text-pink-300'>❤️</span> by your GDG
            McMaster Team
          </p>
        </div>

        {/* Bottom Footer Section */}
        <div className='absolute bottom-0 left-0 right-0 z-20 w-full border-t border-white/30 bg-white/5 backdrop-blur-md'>
          {/* Divider */}
          <div className='h-px w-full bg-white/30'></div>

          {/* Footer Content */}
          <div className='flex flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-8 sm:py-4'>
            {/* Left: Buttons */}
            <div className='flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4'>
              <Link
                href='https://secretariat.mcmaster.ca/university-policies-procedures-guidelines/quick-link-students/'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-amber-100'
              >
                Code of Conduct
              </Link>
              <button className='cursor-pointer rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-amber-100'>
                Privacy Policy
              </button>
            </div>

            {/* Center: Logo */}
            <div className='order-first flex flex-1 items-center justify-center sm:order-none sm:flex-initial'>
              <Image
                src='/assets/icon.png'
                alt='GDG McMaster Logo'
                width={40}
                height={40}
                className='object-contain'
              />
            </div>

            {/* Right: Copyright */}
            <p className='whitespace-nowrap text-sm text-white drop-shadow-md'>
              © 2025 GDG McMaster University
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
        }

        .animation-play-state-paused * {
          animation-play-state: paused !important;
        }
      `}</style>
    </footer>
  )
}

export default Footer
