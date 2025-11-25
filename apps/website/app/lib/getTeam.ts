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
  linkedin?: string
  github?: string
  website?: string
  url?: string
  slug?: string
  email?: string
  organizers?: RawMember[]
  data?: {
    organizers?: RawMember[]
  }
  results?: RawMember[]
}

export interface TeamMember {
  id: string
  name: string
  role: string | null
  photoUrl: string | null
  links?: {
    linkedin?: string
    github?: string
    website?: string
  }
}

const CHAPTER_ID = 2428

const endpointsToTry: string[] = [
  `https://gdg.community.dev/api/organizers/for_chapter/${CHAPTER_ID}/?fields=id,name,first_name,last_name,title,role,avatar_url,photo_url,linkedin,github,website,url`,
  `https://gdg.community.dev/api/chapters/${CHAPTER_ID}/team/?fields=id,name,first_name,last_name,title,role,avatar_url,photo_url,linkedin,github,website,url`,
  `https://gdg.community.dev/api/chapters/${CHAPTER_ID}/?expand=organizers&fields=organizers.id,organizers.name,organizers.first_name,organizers.last_name,organizers.title,organizers.role,organizers.avatar_url,organizers.photo_url,organizers.linkedin,organizers.github,organizers.website,organizers.url`,
]

function mapMember(raw: RawMember): TeamMember {
  const fallbackName = [
    raw.first_name ?? raw.firstName,
    raw.last_name ?? raw.lastName,
  ]
    .filter(Boolean)
    .join(' ')
    .trim()

  const name = raw.name || (fallbackName.length > 0 ? fallbackName : 'Member')

  const idSource =
    raw.id ??
    raw.slug ??
    raw.email ??
    globalThis.crypto?.randomUUID?.() ??
    `${Date.now()}-${Math.random()}`

  return {
    id: String(idSource),
    name,
    role: raw.role ?? raw.title ?? null,
    photoUrl: raw.photo_url ?? raw.avatar_url ?? raw.image ?? null,
    links: {
      linkedin: raw.linkedin,
      github: raw.github,
      website: raw.website ?? raw.url,
    },
  }
}

export default async function getTeam(): Promise<TeamMember[]> {
  for (const url of endpointsToTry) {
    try {
      const res = await fetch(url, { cache: 'no-store' })
      const text = await res.text()

      if (!res.ok || !text || (text[0] !== '{' && text[0] !== '[')) continue

      let data: RawMember | RawMember[] | null = null
      try {
        data = JSON.parse(text)
      } catch {
        continue
      }

      // Case 1: array
      if (Array.isArray(data) && data.length) {
        return data.map(mapMember).filter((m) => m.name.trim().length > 0)
      }

      // Case 2: results or data
      const root = data as RawMember

      const results = root.results
      if (Array.isArray(results) && results.length) {
        return results.map(mapMember).filter((m) => m.name.trim().length > 0)
      }

      const list = root.data?.organizers
      if (Array.isArray(list) && list.length) {
        return list.map(mapMember).filter((m) => m.name.trim().length > 0)
      }

      // Case 3: organizers array
      if (Array.isArray(root.organizers) && root.organizers.length) {
        return root.organizers
          .map(mapMember)
          .filter((m) => m.name.trim().length > 0)
      }
    } catch {
      continue
    }
  }

  console.warn('[GDG organizers] all endpoints returned no usable data')
  return []
}
