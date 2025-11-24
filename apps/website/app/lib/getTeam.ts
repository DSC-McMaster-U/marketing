// apps/website/app/lib/getTeam.ts
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

function mapMember(raw: any): TeamMember {
  const fallbackName = ([raw?.first_name ?? raw?.firstName, raw?.last_name ?? raw?.lastName]
    .filter(Boolean)
    .join(' ')
    .trim())

  const name =
    raw?.name ??
    ((fallbackName && fallbackName.length > 0 ? fallbackName : 'Member'))

  const idSource =
    raw?.id ??
    raw?.slug ??
    raw?.email ??
    (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`)

  return {
    id: String(idSource),
    name,
    role: raw?.role ?? raw?.title ?? null,
    photoUrl: raw?.photo_url ?? raw?.avatar_url ?? raw?.image ?? null,
    links: {
      linkedin: raw?.linkedin ?? undefined,
      github: raw?.github ?? undefined,
      website: raw?.website ?? raw?.url ?? undefined,
    },
  }
}

export default async function getTeam(): Promise<TeamMember[]> {
  for (const url of endpointsToTry) {
    try {
      const res = await fetch(url, { cache: 'no-store' })
      const text = await res.text()
      console.log('[GDG organizers try]', 'url=', url, 'status=', res.status, 'len=', text.length)

      if (!res.ok || !text || (text[0] !== '{' && text[0] !== '[')) continue

      let data: any
      try { data = JSON.parse(text) } catch { continue }

      // Case 1: array
      if (Array.isArray(data) && data.length) {
        const members: TeamMember[] = (data as any[]).map(mapMember)
        if (members.length) return members.filter(m => !!m.name && m.name.trim().length > 0)
      }

      // Case 2: { results: [...] } or { data: [...] }
      const list =
        Array.isArray((data as any)?.results) ? (data as any).results
        : Array.isArray((data as any)?.data) ? (data as any).data
        : null
      if (Array.isArray(list) && list.length) {
        const members: TeamMember[] = list.map(mapMember)
        if (members.length) return members.filter(m => !!m.name && m.name.trim().length > 0)
      }

      // Case 3: { organizers: [...] } (from expand=organizers)
      const orgs =
        Array.isArray((data as any)?.organizers) ? (data as any).organizers
        : Array.isArray((data as any)?.data?.organizers) ? (data as any).data.organizers
        : null
      if (Array.isArray(orgs) && orgs.length) {
        const members: TeamMember[] = orgs.map(mapMember)
        if (members.length) return members.filter(m => !!m.name && m.name.trim().length > 0)
      }
    } catch {
      // try the next endpoint
    }
  }

  console.warn('[GDG organizers] all endpoints returned no usable data')
  return []
}
