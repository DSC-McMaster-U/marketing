import { notFound } from 'next/navigation'
import AdminTeamContent from '../../components/AdminTeamContent'
import CommunityTeamContent from '../../components/CommunityTeamContent'
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
        {resolvedParams.slug === 'community' ? (
          <CommunityTeamContent />
        ) : resolvedParams.slug === 'admin' ? (
          <AdminTeamContent />
        ) : (
          <TeamTemplate team={team} />
        )}
      </main>
    </>
  )
}

export default TeamPage
