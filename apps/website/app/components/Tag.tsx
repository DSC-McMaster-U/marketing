const Tag = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => (
  <div
    className={`${className} flex h-fit w-fit flex-row items-center gap-x-1.5 rounded-md p-2`}
  >
    {children}
  </div>
)

export default Tag
