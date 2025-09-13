import { defineField, defineType } from 'sanity'

export const generalInfoSchema = defineType({
  name: 'generalInfo',
  title: 'General Info',
  type: 'document',
  fields: [
    defineField({
      name: 'club',
      title: 'Club',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta1',
      title: 'Call to Action 1',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'cta2',
      title: 'Call to Action 2',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
