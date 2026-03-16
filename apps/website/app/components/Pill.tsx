interface PillProps {
  children: React.ReactNode
  className?: string
}

const Pill = ({ children, className }: PillProps) => {
  const hasBg = className?.includes('bg-')
  const defaultStyles = hasBg
    ? ''
    : 'border-black-00 dark:border-white-00 border'

  return (
    <div
      className={`${defaultStyles} h-fit w-fit rounded-full px-4 py-2 ${className || ''}`}
    >
      {children}
    </div>
  )
}

export default Pill
