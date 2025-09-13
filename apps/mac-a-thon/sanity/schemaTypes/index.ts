import { type SchemaTypeDefinition } from 'sanity'
import { aboutSchema } from './about'
import { faqSchema } from './faq'
import { generalInfoSchema } from './generalInfo'
import { sponsorSchema } from './sponsor'
import { statisticSchema } from './statistic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    generalInfoSchema,
    faqSchema,
    sponsorSchema,
    aboutSchema,
    statisticSchema,
  ],
}
