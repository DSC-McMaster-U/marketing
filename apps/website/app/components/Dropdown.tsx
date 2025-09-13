import Link from 'next/link'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface DropdownItemProps {
  href: string
  label: string
  icon?: JSX.Element
  description?: string
}

export const DropdownItem = ({
  href,
  label,
  icon,
  description,
}: DropdownItemProps) => {
  return (
    <Link
      href={href}
      className='text-grey-700 hover:text-black-00 dark:hover:text-white-00 block w-full whitespace-nowrap px-3 py-2 transition-colors duration-200'
    >
      <div className='flex flex-row items-center gap-x-2'>
        {icon && <>{icon}</>}
        <div className='flex flex-col'>
          <span className='text-black-00 dark:text-white-00 text-base'>
            {label}
          </span>
          {description && <span className='text-xs'>{description}</span>}
        </div>
      </div>
    </Link>
  )
}

interface DropdownProps {
  name: string
  children?: React.ReactNode
}

const Dropdown = ({ name, children }: DropdownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const handleToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleMouseEnter = () => {
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setDropdownOpen(false)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={handleToggle}
        className='group-hover:text-grey-700 group flex cursor-pointer items-center gap-x-1 px-3 py-1 transition-colors duration-200'
      >
        {name}
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isDropdownOpen && (
        <div className='bg-white-01 dark:bg-black-01 absolute left-0 rounded-lg drop-shadow'>
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
