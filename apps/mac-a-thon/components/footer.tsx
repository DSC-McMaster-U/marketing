'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { teamMembersConfig } from '@/config/teamMembers'
import getTeam, { type TeamMember } from '@/lib/getTeam'
import getTeamFromSanity from '@/lib/getTeamFromSanity'
import { cn } from '@/lib/utils'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

interface BubbleProps {
  member?: TeamMember
  left: number
  delay: number
  duration: number
  isHovered: boolean
  onHover: (id: string | null) => void
  onClick?: (member: TeamMember) => void
}

const Bubble = ({
  member,
  left,
  delay,
  duration,
  isHovered,
  onHover,
  bottom,
  onClick,
}: BubbleProps & { bottom?: number }) => {
  const bubbleRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={bubbleRef}
      className={cn(
        'absolute rounded-full border-2 border-blue-300/60 bg-blue-200/30 backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        'shadow-md',
        isHovered && 'z-20 -translate-y-5 scale-110',
        member && 'cursor-pointer md:cursor-default', // Clickable on mobile
      )}
      style={{
        // Responsive sizing: mobile (45-55px), tablet (50-65px), desktop (60-75px)
        width: member ? 'clamp(45px, 8vw, 75px)' : 'clamp(20px, 4vw, 30px)',
        height: member ? 'clamp(45px, 8vw, 75px)' : 'clamp(20px, 4vw, 30px)',
        ...(isHovered
          ? {}
          : {
              animationName: 'floatUp',
              animationDuration: `${duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDelay: `${delay}s`,
            }),
        bottom: member
          ? 'clamp(30%, 40%, 50%)'
          : bottom !== undefined
            ? `${bottom}%`
            : '20%',
        left: `${left}%`,
        right: 'auto',
        zIndex: member ? 15 : 5,
      }}
      onMouseEnter={() => member && onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => member && onClick?.(member)}
    >
      {member && (
        <div className='relative h-full w-full overflow-hidden rounded-full'>
          {member.photoUrl ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className='object-cover'
              sizes='(max-width: 640px) 40px, (max-width: 768px) 50px, (max-width: 1024px) 60px, 75px'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-blue-300/50 text-base sm:text-lg md:text-2xl'>
              {member.emoji || '👤'}
            </div>
          )}
        </div>
      )}
      {isHovered && member && (
        <div
          className='absolute left-1/2 top-full z-30 mt-2 hidden -translate-x-1/2 transform whitespace-nowrap md:block'
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
  const [teamMembers, setTeamMembers] =
    useState<TeamMember[]>(teamMembersConfig)
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch team data: Sanity -> GDG API -> Config (fallback chain)
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        // Try Sanity first
        const sanityMembers = await getTeamFromSanity()
        if (sanityMembers.length > 0) {
          setTeamMembers(sanityMembers)
          return
        }

        // Fallback to GDG API
        const gdgMembers = await getTeam()
        if (gdgMembers.length > 0) {
          setTeamMembers(gdgMembers)
          return
        }

        // Final fallback to config
        setTeamMembers(teamMembersConfig)
      } catch (error) {
        console.error('Failed to fetch team members:', error)
        // Use config data if all fetches fail
        setTeamMembers(teamMembersConfig)
      }
    }
    fetchTeam()
  }, [])

  useEffect(() => {
    if (hoveredBubbleId) {
      setIsPaused(true)
    } else {
      setIsPaused(false)
    }
  }, [hoveredBubbleId])

  // Handle bubble click on mobile
  const handleBubbleClick = (member: TeamMember) => {
    // Only open modal on mobile (screen width < 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setSelectedMember(member)
      setIsMobileModalOpen(true)
    }
  }

  // Generate decorative bubbles - responsive sizes
  const decorativeBubbles = useMemo(() => {
    // Base sizes that scale with screen size
    const baseSizes = [
      22.5, 18.7, 25.3, 20.1, 19.4, 23.8, 17.6, 21.9, 24.5, 18.2, 22.7, 19.8,
      23.1, 17.3, 25.6, 20.4, 18.9, 24.2, 21.6, 19.1,
    ]
    const fixedBubbles = [
      { left: 8.3, delay: 1.2, duration: 7.4, bottom: 15.2 },
      { left: 45.6, delay: 3.8, duration: 9.1, bottom: 28.4 },
      { left: 72.1, delay: 0.5, duration: 6.8, bottom: 12.7 },
      { left: 15.9, delay: 2.3, duration: 8.5, bottom: 35.6 },
      { left: 88.7, delay: 4.1, duration: 7.9, bottom: 18.3 },
      { left: 33.2, delay: 1.7, duration: 9.3, bottom: 22.9 },
      { left: 67.4, delay: 3.2, duration: 6.5, bottom: 31.1 },
      { left: 52.8, delay: 0.9, duration: 8.7, bottom: 14.6 },
      { left: 26.3, delay: 2.8, duration: 7.2, bottom: 37.8 },
      { left: 91.5, delay: 4.6, duration: 9.5, bottom: 19.4 },
      { left: 11.4, delay: 1.4, duration: 6.9, bottom: 25.3 },
      { left: 58.7, delay: 3.5, duration: 8.3, bottom: 16.7 },
      { left: 39.6, delay: 0.7, duration: 7.6, bottom: 33.2 },
      { left: 84.2, delay: 2.9, duration: 9.2, bottom: 21.5 },
      { left: 6.8, delay: 4.3, duration: 6.4, bottom: 29.8 },
      { left: 63.9, delay: 1.8, duration: 8.9, bottom: 13.9 },
      { left: 29.1, delay: 3.7, duration: 7.1, bottom: 36.4 },
      { left: 76.5, delay: 0.3, duration: 9.4, bottom: 17.2 },
      { left: 47.3, delay: 2.6, duration: 6.7, bottom: 30.5 },
      { left: 95.8, delay: 4.8, duration: 8.1, bottom: 24.7 },
    ]

    return fixedBubbles.map((bubble, i) => ({
      id: `dec-${i}`,
      size: baseSizes[i],
      ...bubble,
    }))
  }, [])

  // Main team bubbles - limit to max 15 visible, scale well with many members
  const teamBubbles = useMemo(() => {
    if (teamMembers.length === 0) return []

    // Limit visible bubbles to prevent overcrowding
    // Show fewer on mobile (8), more on tablet (12), all up to 15 on desktop
    const maxVisibleBubbles = 15
    const visibleMembers = teamMembers.slice(0, maxVisibleBubbles)

    // Responsive base sizes
    const baseSizeMobile = 40
    const baseSizeTablet = 50
    const sizeVariation = 12
    const sizePattern = [0, 4, -2, 2, 3, -1, 1, 3, 0, 2, -2, 1, -1, 2, 0]

    // Duration variations
    const baseDuration = 4.0
    const durationVariation = 0.8
    const durationPattern = [
      0.2, -0.2, 0.5, -0.1, 0.1, 0.3, -0.3, 0.0, 0.4, -0.4, 0.2, 0.1, -0.1, 0.2,
      0.0,
    ]

    // Calculate positions dynamically based on member count
    // Spread across 80% of width (10% margin on each side)
    const startMargin = 10
    const endMargin = 10
    const availableWidth = 100 - startMargin - endMargin

    return visibleMembers.map((member, index) => {
      // Calculate left position: evenly distribute across available width
      const left =
        visibleMembers.length > 1
          ? startMargin + (index / (visibleMembers.length - 1)) * availableWidth
          : 50 // Center if only one member

      // Use pattern for sizes and durations, cycling if needed
      const sizeIndex = index % sizePattern.length
      const durationIndex = index % durationPattern.length

      // Calculate responsive size (will be overridden by CSS clamp)
      const baseSize = baseSizeMobile + (baseSizeTablet - baseSizeMobile) / 2
      const sizeVariationValue = sizePattern[sizeIndex] * (sizeVariation / 5)

      return {
        member,
        // Size will be clamped responsively via CSS
        size: baseSize + sizeVariationValue,
        left: Math.round(left * 10) / 10, // Round to 1 decimal
        delay: Math.round(index * 0.3 * 10) / 10, // Stagger animations
        duration:
          baseDuration + durationPattern[durationIndex] * durationVariation,
      }
    })
  }, [teamMembers])

  return (
    <footer className='relative !mx-0 w-full !max-w-none overflow-hidden !px-0'>
      {/* Underwater Background */}
      <div
        className='relative w-full'
        style={{
          minHeight: 'clamp(400px, 50vh, 652px)',
          backgroundImage: `url('/assets/footer-background-underwater.png')`,
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
            'absolute inset-0 z-10',
            isPaused && 'animation-play-state-paused',
          )}
        >
          {/* Decorative bubbles - show some on mobile, all on larger screens */}
          {decorativeBubbles.map((bubble, i) => (
            <div
              key={bubble.id}
              className={cn(
                i >= 8 && 'hidden sm:block', // Hide bubbles 8+ on mobile
              )}
            >
              <Bubble
                left={bubble.left}
                delay={bubble.delay}
                duration={bubble.duration}
                bottom={bubble.bottom}
                isHovered={false}
                onHover={() => {}}
              />
            </div>
          ))}

          {/* Team member bubbles - responsive sizing, show fewer on mobile */}
          {teamBubbles.map((bubble, index) => (
            <div
              key={bubble.member.id}
              className={cn(
                index >= 8 && 'hidden sm:block', // Show first 8 on mobile, all on larger screens
              )}
            >
              <Bubble
                member={bubble.member}
                left={bubble.left}
                delay={bubble.delay}
                duration={bubble.duration}
                isHovered={hoveredBubbleId === bubble.member.id}
                onHover={setHoveredBubbleId}
                onClick={handleBubbleClick}
              />
            </div>
          ))}
        </div>

        {/* Center Text */}
        <div className='absolute bottom-16 left-1/2 z-10 -translate-x-1/2 transform sm:bottom-20 md:bottom-24'>
          <p className='text-center text-sm font-medium text-white drop-shadow-lg sm:text-base md:text-lg lg:text-xl'>
            Made with <span className='text-pink-300'>❤️</span> by your GDG
            McMaster Team
          </p>
        </div>

        {/* Mobile & Tablet: Button to view all team members */}
        <div className='z-15 absolute bottom-24 left-1/2 -translate-x-1/2 transform sm:bottom-28 md:hidden'>
          <Sheet open={isMobileModalOpen} onOpenChange={setIsMobileModalOpen}>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='sm'
                className='border-blue-200/50 bg-white/90 text-xs text-gray-800 shadow-lg backdrop-blur-sm hover:bg-white/95 sm:text-sm'
              >
                <Users className='mr-2 h-3 w-3 sm:h-4 sm:w-4' />
                View All {teamMembers.length} Team Members
              </Button>
            </SheetTrigger>
            <SheetContent side='bottom' className='h-[85vh] overflow-y-auto'>
              <SheetHeader>
                <SheetTitle>Meet the Team</SheetTitle>
                <SheetDescription>
                  {teamMembers.length > 15
                    ? `Showing all ${teamMembers.length} team members. Click on any to see details.`
                    : 'Click on any team member to see their details'}
                </SheetDescription>
              </SheetHeader>
              <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
                {teamMembers.map((member) => (
                  <Card
                    key={member.id}
                    className='cursor-pointer transition-all hover:scale-105 hover:shadow-lg'
                    onClick={() => {
                      setSelectedMember(member)
                    }}
                  >
                    <CardContent className='flex flex-col items-center p-3 text-center sm:p-4'>
                      <div className='mb-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-300/40 bg-blue-200/20 text-2xl sm:mb-3 sm:h-20 sm:w-20 sm:text-3xl'>
                        {member.photoUrl ? (
                          <Image
                            src={member.photoUrl}
                            alt={member.name}
                            width={80}
                            height={80}
                            className='rounded-full object-cover'
                          />
                        ) : (
                          <span>{member.emoji || '👤'}</span>
                        )}
                      </div>
                      <h3 className='text-sm font-semibold text-gray-800 sm:text-base'>
                        {member.name}
                      </h3>
                      <p className='text-xs text-gray-600 sm:text-sm'>
                        {member.subteam}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {selectedMember && (
                <div className='mt-6 rounded-lg border border-blue-200/50 bg-blue-50/50 p-4'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-300/40 bg-blue-200/20 text-2xl'>
                      {selectedMember.photoUrl ? (
                        <Image
                          src={selectedMember.photoUrl}
                          alt={selectedMember.name}
                          width={64}
                          height={64}
                          className='rounded-full object-cover'
                        />
                      ) : (
                        <span>{selectedMember.emoji || '👤'}</span>
                      )}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800'>
                        {selectedMember.name}
                      </h3>
                      <p className='text-sm text-gray-600'>
                        {selectedMember.subteam}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>

        {/* Bottom Footer Section */}
        <div className='absolute bottom-0 left-0 right-0 z-20 w-full border-t border-white/30 bg-white/5 backdrop-blur-md'>
          {/* Divider */}
          <div className='h-px w-full bg-white/30'></div>

          {/* Footer Content */}
          <div className='flex flex-col items-center justify-between gap-2 px-3 py-2 sm:flex-row sm:gap-3 sm:px-6 sm:py-3 md:px-8 md:py-4'>
            {/* Left: Buttons */}
            <div className='flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 md:gap-4'>
              <Link
                href='https://secretariat.mcmaster.ca/university-policies-procedures-guidelines/quick-link-students/'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm transition-colors hover:bg-amber-100 sm:px-4 sm:py-2 sm:text-sm'
              >
                Code of Conduct
              </Link>
              <button className='cursor-pointer rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm transition-colors hover:bg-amber-100 sm:px-4 sm:py-2 sm:text-sm'>
                Privacy Policy
              </button>
            </div>

            {/* Center: Logo */}
            <div className='order-first flex flex-1 items-center justify-center sm:order-none sm:flex-initial'>
              <Image
                src='/assets/icon.png'
                alt='GDG McMaster Logo'
                width={32}
                height={32}
                className='object-contain sm:h-10 sm:w-10'
              />
            </div>

            {/* Right: Copyright */}
            <p className='whitespace-nowrap text-xs text-white drop-shadow-md sm:text-sm'>
              © {new Date().getFullYear()} GDG McMaster University
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
