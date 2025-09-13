import Pill from './Pill'

interface SectionCardProps {
  title?: string
  description?: string
  id: string
  children?: React.ReactNode
}

const SectionCard = ({
  title,
  description,
  id,
  children,
}: SectionCardProps) => {
  return (
    <section
      id={id}
      className='bg-white-01 dark:bg-black-01 h-fit w-full rounded-xl object-contain shadow-md'
    >
      <div
        id={`${id}-section-card-content`}
        className='mx-auto flex max-w-full flex-col items-center gap-y-12 px-2 py-8 text-center sm:py-12 md:gap-y-16 lg:py-16'
      >
        {(title || description) && (
          <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4'>
            <Pill>{title}</Pill>
            <h2>{description}</h2>
          </div>
        )}
        <div className='mx-auto flex max-w-[90%] flex-col items-center gap-y-8 text-start'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionCard
