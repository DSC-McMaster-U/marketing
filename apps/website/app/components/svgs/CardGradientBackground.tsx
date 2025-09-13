import { SVGProps } from 'react'

const CardGradientBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={480}
    height={240}
    viewBox='0 0 480 240'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_194_266)'>
      <path d='M480 0H0V240H480V0Z' fill='#1A1A1B' />
      <path
        d='M480 194.68C450.4 184.56 420.747 174.4 387.947 166.68C355.147 158.96 319.147 153.68 296.427 137.68C273.707 121.68 264.267 95 253.813 70.28C243.36 45.52 231.893 22.76 220.427 0H480V194.68Z'
        fill='#303032'
      />
      <path
        d='M0 45.3198C32.3733 49.8398 64.7467 54.3998 97.9733 62.5998C131.2 70.8398 165.28 82.7198 183.573 102.32C201.867 121.92 204.32 149.2 214.347 173.4C224.373 197.64 241.973 218.8 259.573 240H0V45.3198Z'
        fill='#303032'
      />
    </g>
    <defs>
      <clipPath id='clip0_194_266'>
        <rect width={480} height={240} fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default CardGradientBackground
