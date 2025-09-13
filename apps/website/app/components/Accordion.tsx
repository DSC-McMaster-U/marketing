import Link from 'next/link'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface AccordionItemProps {
  href: string
  label: string
  icon?: JSX.Element
}

export const AccordionItem = ({ href, label, icon }: AccordionItemProps) => {
  return (
    <Link
      href={href}
      className='hover:text-google-grey block w-full whitespace-nowrap py-1 text-base dark:text-white'
    >
      <div className='flex flex-row items-center gap-x-2'>
        {icon && <>{icon}</>}
        <span className='transition-colors duration-200'>{label}</span>
      </div>
    </Link>
  )
}

interface AccordionProps {
  children?: React.ReactNode
  title: string
}

const Accordion = ({ children, title }: AccordionProps) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false)

  const handleToggle = () => {
    setAccordionOpen(!isAccordionOpen)
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        className='group-hover:text-google-grey flex w-full cursor-pointer items-center justify-between py-2 transition-colors duration-200'
      >
        {title}
        <FiChevronDown
          className={`h-6 w-6 transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isAccordionOpen && <>{children}</>}
    </div>
  )
}

export default Accordion
