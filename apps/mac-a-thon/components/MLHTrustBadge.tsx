const MLHTrustBadge = () => {
  return (
    <a
      id='mlh-trust-badge'
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        zIndex: 10000,
      }}
      href='https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white'
      target='_blank'
    >
      <img
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg'
        alt='Major League Hacking 2025 Hackathon Season'
        style={{ width: '100%' }}
      />
    </a>
  )
}

export default MLHTrustBadge
