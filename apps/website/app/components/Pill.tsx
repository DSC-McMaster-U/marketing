interface PillProps {
  children: React.ReactNode
}

const Pill = ({ children }: PillProps) => {
  return (
    <div className='border-black-00 dark:border-white-00 h-fit w-fit rounded-full border px-4 py-2'>
      {children}
    </div>
  )
}

export default Pill
