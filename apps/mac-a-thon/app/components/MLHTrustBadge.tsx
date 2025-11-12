import Image from 'next/image'
import Link from 'next/link'

const MLHTrustBadge = () => {
  return (
    <Link
      id='mlh-trmlhust-badge'
      href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white'
      target='_blank'
      rel='noopener noreferrer' 
      className='fixed top-0 right-0 z-[100] block transition-opacity duration-300 hover:opacity-90 md:right-[12rem] [body[data-menu-open]_&]:hidden'
      aria-label='MLH Trust Badge - Major League Hacking 2025 Hackathon Season'                                       // If menu is open, hide the badge
      
    >
      <Image
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg'
        alt='Major League Hacking 2025 Hackathon Season'
        width={50}
        height={60}
        className='h-auto w-[75px] md:w-[96px]'
        priority
      />
    </Link>
  )
}

export default MLHTrustBadge
