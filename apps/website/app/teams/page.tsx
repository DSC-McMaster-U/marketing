import Link from 'next/link'
import { FiCalendar, FiCode, FiStar, FiUsers, FiVolume2 } from 'react-icons/fi'
import AnimatedHero from '../components/AnimatedHero'
import Card from '../components/Card'
import Header from '../components/Header'
import Pill from '../components/Pill'
import SectionCard from '../components/SectionCard'
import { teamsData } from '../lib/teamData'

const TeamsOverview = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'open-source':
        return <FiCode className="text-2xl" />
      case 'conferences':
        return <FiCalendar className="text-2xl" />
      case 'community':
        return <FiUsers className="text-2xl" />
      case 'marketing':
        return <FiVolume2 className="text-2xl" />
      default:
        return <FiStar className="text-2xl" />
    }
  }

  return (
    <>
      <Header />
      <main>
        <AnimatedHero
          id="teams-overview-hero"
          className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28"
        >
          <div className="flex w-full flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center">
              <Pill>Our Teams</Pill>
              <h1>Meet the Teams</h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                GDG on Campus McMaster is made up of several specialized teams, each working on exciting initiatives.
                Click below to learn more about what we do!
              </p>
            </div>
          </div>
        </AnimatedHero>

        <SectionCard id="teams-list">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {Object.values(teamsData).map((team) => (
              <Link key={team.id} href={`/teams/${team.id}`} className="group h-full">
                <Card
                  title={team.name}
                  description={team.description}
                  icon={getIcon(team.id)}
                  className="h-full transition-transform duration-200 group-hover:-translate-y-1"
                >
                  <div className="mt-4 text-sm text-neutral-500">
                    {team.overview.length > 100
                      ? `${team.overview.slice(0, 100)}...`
                      : team.overview}
                  </div>
                  <div className={`mt-4 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase bg-${team.color}/10 text-${team.color}`}>
                    View Team &rarr;
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </SectionCard>
      </main>
    </>
  )
}

export default TeamsOverview
