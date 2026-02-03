import { ReactNode } from 'react'

export interface Member {
  name: string
  role: string
  image?: string // Path to local image or URL
}

export interface Project {
  name: string
  description: string
  status: 'active' | 'completed' | 'archived'
  link?: string
  repo?: string
  image?: string
}

export interface Event {
  name: string
  date: string
  location: string
  description: string
  link?: string
  image?: string
}

export interface TeamData {
  id: string
  name: string
  description: string
  overview: string
  color: string // Tailwind class or hex for accents
  members: Member[]
  // specific sections
  projects?: Project[]
  events?: Event[]
  socials?: { name: string; url: string; icon?: ReactNode }[]
}

export const teamsData: Record<string, TeamData> = {
  'open-source': {
    id: 'open-source',
    name: 'Open Source',
    description: 'Building impactful software for the community.',
    overview:
      'The Open Source team focuses on building software that benefits the McMaster community and beyond. We work on real-world projects, contribute to existing open source initiatives, and foster a culture of collaboration and code quality.',
    color: 'blue-500',
    members: [
      { name: 'Open Source Lead', role: 'Team Lead' },
      // Add more members as needed
    ],
    projects: [
      {
        name: 'GDG Website',
        description: 'The official website for GDG on Campus McMaster.',
        status: 'active',
        link: 'https://gdgmcmaster.ca',
        repo: 'https://github.com/gdg-mcmaster-u/website',
      },
      // Add placeholders for other projects
    ],
  },
  conferences: {
    id: 'conferences',
    name: 'Conferences',
    description: 'Organizing Mac-a-thon and other major tech events.',
    overview:
      'The Conferences team is the driving force behind our flagship events, most notably Mac-a-thon. We handle logistics, sponsorship, participant experience, and everything in between to deliver unforgettable hackathons and conferences.',
    color: 'red-500',
    members: [{ name: 'Conference Lead', role: 'Team Lead' }],
    events: [
      {
        name: 'Mac-a-thon 2025',
        date: 'May 2025',
        location: 'McMaster University',
        description:
          'Our annual hackathon bringing together students to solve challenges.',
        link: 'https://mac-a-thon.gdgmcmaster.ca',
      },
    ],
  },
  community: {
    id: 'community',
    name: 'Community',
    description: 'Fostering connections through workshops and socials.',
    overview:
      'The Community team ensures that everyone feels welcome and engaged. We organize workshops, social events, and study sessions to build a strong network of developers and friends.',
    color: 'green-500',
    members: [{ name: 'Community Lead', role: 'Team Lead' }],
    events: [
      {
        name: 'Tech Talk Series',
        date: 'Bi-weekly',
        location: 'MDCL',
        description:
          'Regular talks on various tech topics from industry experts and students.',
      },
    ],
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    description: 'Sharing our story and connecting with the world.',
    overview:
      'The Marketing team manages our brand presence, social media, and outreach. We make sure the world knows about the amazing things happening at GDG McMaster.',
    color: 'yellow-500',
    members: [{ name: 'Marketing Lead', role: 'Team Lead' }],
    socials: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/gdgmcmasteru',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/gdgmcmasteru',
      },
    ],
  },
}

export const getAllTeamSlugs = () => {
  return Object.keys(teamsData).map((slug) => ({ slug }))
}

export const getTeamData = (slug: string) => {
  return teamsData[slug] || null
}
