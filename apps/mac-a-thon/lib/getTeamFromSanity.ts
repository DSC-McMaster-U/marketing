// lib/getTeamFromSanity.ts - Fetch team members from Sanity CMS

import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { TeamMember as SanityTeamMember } from '@/types/sanity'

export interface TeamMember {
  id: string
  name: string
  subteam: string
  emoji?: string
  photoUrl: string | null
}

export default async function getTeamFromSanity(): Promise<TeamMember[]> {
  try {
    const sanityMembers: SanityTeamMember[] = await client.fetch(`
      *[_type == "teamMember"] | order(order asc, name asc) {
        _id,
        name,
        subteam,
        emoji,
        photo
      }
    `)

    if (!sanityMembers || sanityMembers.length === 0) {
      return []
    }

    return sanityMembers.map((member) => ({
      id: member._id,
      name: member.name,
      subteam: member.subteam,
      emoji: member.emoji || undefined,
      photoUrl: member.photo ? urlFor(member.photo.asset).url() : null,
    }))
  } catch (error) {
    console.error('Failed to fetch team members from Sanity:', error)
    return []
  }
}
