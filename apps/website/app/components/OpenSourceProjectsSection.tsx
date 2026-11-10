import Image from 'next/image'
import Link from 'next/link'
import { MdArrowDropDown, MdCode } from 'react-icons/md'
import { OpenSourceProject, openSourceProjects } from '../lib/openSourceProjects'
import Pill from './Pill'
import SectionCard from './SectionCard'

const ProjectTile = ({ project }: { project: OpenSourceProject }) => (
  <div className="flex flex-col gap-y-2">
    {/* Project Image (links to GitHub) */}
    <Link
      href={project.githubUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} on GitHub`}
    >
      <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-xl bg-white-03 dark:bg-black-03 md:w-64">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={150}
            height={150}
            className="h-[150px] w-[150px] object-contain"
          />
        ) : (
          <MdCode size={120} />
        )}
      </div>
    </Link>

    {/* Project Name and Status */}
    <div className="flex w-40 flex-col items-center md:w-64">
      <span className="max-w-full break-words text-center">
        {project.title.replace(/-/g, ' ')}
      </span>
      {project.status === 'in-progress' && (
        <span className="text-sm text-yellow-600 dark:text-yellow-500">
          In Progress
        </span>
      )}
    </div>
  </div>
)

const OpenSourceProjectsSection = () => {
  const inProgress = openSourceProjects.filter(
    (project) => project.status === 'in-progress',
  )
  const archived = openSourceProjects.filter(
    (project) => project.status === 'archived',
  )

  return (
    <div className="flex w-full flex-col gap-y-16">
      <SectionCard id="open-source-projects">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto mb-16">
          <Pill className="mb-6 bg-blue-500 text-white border-blue-400">
            Projects
          </Pill>
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl text-black dark:text-white tracking-tight">
            What we are working on
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Explore the tools and AI systems developed by our open source team
            at GDG McMaster.
          </p>
        </div>

        {/* In Progress Projects */}
        <div className="flex w-full flex-wrap gap-4">
          {inProgress.map((project) => (
            <ProjectTile key={project.name} project={project} />
          ))}
        </div>

        {/* Archived Projects (collapsible) */}
        <details className="group mt-8 w-full">
          <summary className="flex cursor-pointer items-center gap-x-2 text-base text-black-03 dark:text-white-03">
            <MdArrowDropDown className="transition-transform group-open:rotate-180" />
            Archived
          </summary>
          <div className="mt-4 flex flex-wrap gap-4">
            {archived.map((project) => (
              <ProjectTile key={project.name} project={project} />
            ))}
          </div>
        </details>
      </SectionCard>
    </div>
  )
}

export default OpenSourceProjectsSection
