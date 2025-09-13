interface TickerProps {
  children: React.ReactNode
}

const Ticker = ({ children }: TickerProps) => {
  return (
    <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
      <ul className='animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8'>
        {children}
      </ul>
      {/* Duplicate the same list for the infinite scroll effect */}
      <ul
        className='animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8'
        aria-hidden='true'
      >
        {children}
      </ul>
    </div>
  )
}

export default Ticker
