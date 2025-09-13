import '@/styles/ChevronArrow.css'

export const ChevronArrowButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={`${className} button-arrow flex flex-row items-center justify-between gap-x-1 rounded-full px-4 py-1 backdrop-blur`}
    >
      {children}
      <ChevronArrow />
    </button>
  )
}

export const ChevronArrowSpan = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={`${className} button-arrow flex flex-row items-center gap-x-1 rounded-full backdrop-blur`}
    >
      {children}
      <ChevronArrow />
    </span>
  )
}

export const ChevronArrow = () => {
  return (
    <svg
      viewBox='0 0 6 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='arrow-icon'
    >
      <g className='arrow-head'>
        <path
          d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
      <g className='arrow-body'>
        <path d='M3.5 4.5H0' stroke='currentColor' strokeWidth='1.5' />
      </g>
    </svg>
  )
}
