interface PillProps {
  children: React.ReactNode
  className?: string
}

const Pill = ({ children, className }: PillProps) => {
  return (
    <div
      className={`border-black-00 dark:border-white-00 h-fit w-fit rounded-full border px-4 py-2 ${className}`}
    >
      {children}
    </div>
  )
}

export default Pill
