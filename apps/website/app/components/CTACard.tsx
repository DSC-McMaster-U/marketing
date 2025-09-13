interface CTACardProps {
  Image?: React.ReactNode
  Content: React.ReactNode
  CTA: React.ReactNode
}

const CTACard = ({ Image, Content, CTA }: CTACardProps) => {
  return (
    <div
      className={`group relative ${
        Image ? 'h-96 md:h-[32rem]' : 'h-72'
      } bg-white-02 dark:bg-black-03 w-1/3 overflow-hidden rounded-md p-1 shadow-lg`}
    >
      {/* Image Section */}
      {Image && (
        <div className='bg-white-01 dark:bg-black-01 relative h-72 overflow-hidden rounded-md transition-all duration-200 ease-in-out'>
          {Image}
        </div>
      )}

      {/* Content Section */}
      <div className='flex flex-col gap-y-2 p-4'>{Content}</div>

      {/* CTA Section */}
      <div className='absolute bottom-0 left-0 translate-y-full transform p-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0'>
        {CTA}
      </div>
    </div>
  )
}

export default CTACard
