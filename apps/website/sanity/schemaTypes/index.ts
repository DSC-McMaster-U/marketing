import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { eventSchema } from './event'
import { generalInfoSchema } from './generalInfo'
import { newsletterSchema } from './newsletter'
import { sponsorSchema } from './sponsor'
import { teamSchema } from './team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutSchema,
    eventSchema,
    newsletterSchema,
    sponsorSchema,
    teamSchema,
    generalInfoSchema,
  ],
}
