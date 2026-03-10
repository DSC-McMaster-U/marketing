import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { openSourceProjects } from '../lib/openSourceProjects'
import Pill from './Pill'
import SectionCard from './SectionCard'

const OpenSourceProjectsSection = () => {
  return (
    <div className="flex w-full flex-col gap-y-16">
      <SectionCard id="open-source-projects">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto mb-16">
          <Pill className="mb-6 bg-blue-500 text-white border-blue-400">
            Open Source
          </Pill>
          <h2 className="mb-4 text-4xl font-extrabold md:text-5xl text-black dark:text-white tracking-tight">
            Projects We&apos;ve Built
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Explore the tools and AI systems developed by our open source team
            at GDG McMaster.
          </p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {openSourceProjects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-blue-500/10 relative"
            >
              {/* Cover Image (16:9 ratio) */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 w-full">
                    <span className="text-xl font-bold text-neutral-400 dark:text-neutral-600 tracking-tight font-mono">
                      {project.title}
                    </span>
                  </div>
                )}
                {/* Subtle dark overlay gradient for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none mix-blend-multiply dark:mix-blend-normal dark:from-black/20" />
              </div>

              {/* Content Bottom Info */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 line-clamp-1">
                  {project.title.replace(/-/g, ' ')}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {project.description ||
                    'An open source initiative by GDG McMaster focused on community-driven development and technological exploration.'}
                </p>

                {/* Tags */}
                {project.topics && project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Action Button */}
                <div className="mt-auto pt-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="group/btn flex items-center justify-center w-full gap-x-2 rounded-xl bg-neutral-900 dark:bg-white px-4 py-3 text-sm font-semibold text-white dark:text-black transition-all hover:bg-black dark:hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FiGithub className="text-lg transition-transform group-hover/btn:scale-110" />
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

export default OpenSourceProjectsSection
