interface MemberCardProps {
  Image: React.ReactNode
  Content: React.ReactNode
  CTA?: React.ReactNode
}

const MemberCard = ({ Image, Content, CTA }: MemberCardProps) => {
  return (
    <div className='bg-white-02 dark:bg-black-02 group relative h-[24rem] w-[16rem] overflow-hidden rounded-md p-1 shadow-sm'>
      <div
        className={`${CTA && 'hover-none:h-54 group-hover:h-54'} bg-white-01 dark:bg-black-01 relative flex h-64 items-center justify-center overflow-hidden rounded-md transition-all duration-200 ease-in-out`}
      >
        {Image}
      </div>
      <div className='flex min-w-64 flex-col gap-y-2 p-4'>{Content}</div>
      {CTA && (
        <div className='hover-none:translate-y-0 absolute bottom-0 left-0 w-full translate-y-full transform p-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0'>
          {CTA}
        </div>
      )}
    </div>
  )
}

export default MemberCard
