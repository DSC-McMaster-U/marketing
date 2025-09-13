'use client'
import { motion } from 'framer-motion'

interface AnimatedContainerProps {
  children?: React.ReactNode
  className?: string
  id?: string
}

const AnimatedHero = ({ children, className, id }: AnimatedContainerProps) => {
  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedHeroSvg = ({
  children,
  className,
  id,
}: AnimatedContainerProps) => {
  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: [0, 1.2, 1.0],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedHero
