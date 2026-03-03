import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import TeamTemplate from '../../components/TeamTemplate'
import { getAllTeamSlugs, getTeamData } from '../../lib/teamData'

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs()
  return slugs
}

interface TeamPageProps {
  params: Promise<{
    slug: string
  }>
}

const TeamPage = async ({ params }: TeamPageProps) => {
  const resolvedParams = await params
  const team = getTeamData(resolvedParams.slug)

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
