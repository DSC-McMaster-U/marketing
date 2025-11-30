// lib/getTeam.ts - Fetch team members from GDG API

export interface RawMember {
  id?: string | number
  name?: string
  first_name?: string
  firstName?: string
  last_name?: string
  lastName?: string
  title?: string
  role?: string
  avatar_url?: string
  photo_url?: string
  image?: string
  results?: RawMember[]
  data?: {
    organizers?: RawMember[]
  }
  organizers?: RawMember[]
}

export interface TeamMember {
  id: string
  name: string
  subteam: string // Role/title from API
  emoji?: string // Optional emoji (could be added to Sanity later)
  photoUrl: string | null
}

const CHAPTER_ID = 2428

const endpointsToTry: string[] = [
  `https://gdg.community.dev/api/organizers/for_chapter/${CHAPTER_ID}/?fields=id,name,first_name,last_name,title,role,avatar_url,photo_url`,
  `https://gdg.community.dev/api/chapters/${CHAPTER_ID}/team/?fields=id,name,first_name,last_name,title,role,avatar_url,photo_url`,
  `https://gdg.community.dev/api/chapters/${CHAPTER_ID}/?expand=organizers&fields=organizers.id,organizers.name,organizers.first_name,organizers.last_name,organizers.title,organizers.role,organizers.avatar_url,organizers.photo_url`,
]

function parseJson<T>(text: string): T | null {
  try {
    return JSON.parse(text) as unknown as T
  } catch {
    return null
  }
}

function isRawMemberArray(value: unknown): value is RawMember[] {
  return Array.isArray(value)
}

function isRawMemberObj(value: unknown): value is RawMember {
  return typeof value === 'object' && value !== null
}

function mapMember(raw: RawMember): TeamMember {
  const fallbackName = [
    raw.first_name ?? raw.firstName,
    raw.last_name ?? raw.lastName,
  ]
    .filter((s): s is string => typeof s === 'string' && s.length > 0)
    .join(' ')

  const name =
    raw.name ?? (fallbackName.length > 0 ? fallbackName : 'Team Member')

  const idSource =
    raw.id ??
    globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random()}`

  return {
    id: String(idSource),
    name,
    subteam: raw.role ?? raw.title ?? 'Team',
    photoUrl: raw.photo_url ?? raw.avatar_url ?? raw.image ?? null,
  }
}

export default async function getTeam(): Promise<TeamMember[]> {
  for (const url of endpointsToTry) {
    try {
      const res = await fetch(url, { cache: 'no-store' })
      const text = await res.text()

      if (!res.ok || !text || (text[0] !== '{' && text[0] !== '[')) continue

      const data = parseJson<RawMember | RawMember[]>(text)
      if (!data) continue

      // Case 1: top-level array
      if (isRawMemberArray(data)) {
        const members = data
          .map(mapMember)
          .filter((m) => m.name.trim().length > 0)
        if (members.length) return members
        continue
      }

      // From here on, data is RawMember
      if (!isRawMemberObj(data)) continue

      // Case 2: results
      if (isRawMemberArray(data.results)) {
        const members = data.results
          .map(mapMember)
          .filter((m: TeamMember) => m.name.trim().length > 0)
        if (members.length) return members
      }

      // Case 3: data.organizers (expanded)
      if (isRawMemberArray(data.data?.organizers)) {
        const members = data.data.organizers
          .map(mapMember)
          .filter((m: TeamMember) => m.name.trim().length > 0)
        if (members.length) return members
      }

      // Case 4: organizers (direct)
      if (isRawMemberArray(data.organizers)) {
        const members = data.organizers
          .map(mapMember)
          .filter((m: TeamMember) => m.name.trim().length > 0)
        if (members.length) return members
      }
    } catch {
      // try next endpoint
      continue
    }
  }

  console.warn('[GDG organizers] all endpoints returned no usable data')
  return []
}
