import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { faqSchema } from './faq'
import { generalInfoSchema } from './generalInfo'
import { sponsorSchema } from './sponsor'
import { statisticSchema } from './statistic'
import { teamMemberSchema } from './teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    generalInfoSchema,
    faqSchema,
    sponsorSchema,
    aboutSchema,
    statisticSchema,
    teamMemberSchema,
  ],
}
