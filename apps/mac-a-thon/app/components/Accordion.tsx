'use client'
import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

interface AccordionProps {
  title: string
  children: ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full'>
      <button
        className={`bg-google-lightGrey flex w-full items-center justify-between px-4 py-2 text-left text-lg font-[600] transition-all duration-300 ease-in-out ${isOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.div
          className='flex items-center'
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdExpandMore className='h-6 w-6' />
        </motion.div>
      </button>
      <motion.div
        className='overflow-hidden'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className='rounded-b-xl bg-gray-50 px-4 py-2'>{children}</div>
      </motion.div>
    </div>
  )
}

export default Accordion
