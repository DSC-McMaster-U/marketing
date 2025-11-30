// Team Members Configuration
// Easy to add/remove team members - just edit this file!
// The API will override this if it successfully fetches data

import { type TeamMember } from '@/lib/getTeam'

export const teamMembersConfig: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Chen',
    subteam: 'Design',
    emoji: '🎨',
    photoUrl: null,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    subteam: 'Development',
    emoji: '💻',
    photoUrl: null,
  },
  {
    id: '3',
    name: 'Mike Zhang',
    subteam: 'Marketing',
    emoji: '📱',
    photoUrl: null,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    subteam: 'Design',
    emoji: '✨',
    photoUrl: null,
  },
  {
    id: '5',
    name: 'David Lee',
    subteam: 'Development',
    emoji: '🚀',
    photoUrl: null,
  },
  {
    id: '6',
    name: 'Lisa Park',
    subteam: 'Marketing',
    emoji: '📊',
    photoUrl: null,
  },
  {
    id: '7',
    name: 'Chris Brown',
    subteam: 'Design',
    emoji: '🎭',
    photoUrl: null,
  },
  {
    id: '8',
    name: 'Jordan Kim',
    subteam: 'Development',
    emoji: '⚡',
    photoUrl: null,
  },
  {
    id: '9',
    name: 'Taylor Swift',
    subteam: 'Marketing',
    emoji: '🎵',
    photoUrl: null,
  },
  {
    id: '10',
    name: 'Morgan Hill',
    subteam: 'Design',
    emoji: '🌈',
    photoUrl: null,
  },
  {
    id: '11',
    name: 'Casey Jones',
    subteam: 'Development',
    emoji: '🔥',
    photoUrl: null,
  },
]

// To add a new team member, just add a new object to the array above:
// { id: '12', name: 'New Member', subteam: 'Design', emoji: '🎨', photoUrl: null },
//
// To remove a team member, just delete their object from the array.
//
// Fields:
// - id: unique identifier (string)
// - name: full name (string)
// - subteam: team/subteam name (string)
// - emoji: optional emoji to display (string | undefined)
// - photoUrl: optional photo URL (string | null)
