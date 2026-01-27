import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import TeamTemplate from '../../components/TeamTemplate'
import { getAllTeamSlugs, getTeamData } from '../../lib/teamData'

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs()
  return slugs
}

interface TeamPageProps {
  params: {
    slug: string
  }
}

const TeamPage = ({ params }: TeamPageProps) => {
  const team = getTeamData(params.slug)

  if (!team) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <TeamTemplate team={team} />
      </main>
    </>
  )
}

export default TeamPage
