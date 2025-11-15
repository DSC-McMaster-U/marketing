import Image from 'next/image'
import Link from 'next/link'

const MLHTrustBadge = () => {
  return (
    <Link
      id='mlh-trust-badge'
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        zIndex: 10000,
      }}
      href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg'
        alt='Major League Hacking 2026 Hackathon Season'
        width={50}
        height={60}
        className='h-auto w-[75px] md:w-[96px]'
        priority
      />
    </Link>
  )
}

export default MLHTrustBadge
