import { defineField, defineType } from 'sanity'

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('First name is required'),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Last name is required'),
    }),
    defineField({
      name: 'subteam',
      title: 'Subteam',
      type: 'string',
      description:
        'The subteam or role (e.g. "Design", "Development", "Marketing")',
      validation: (Rule) => Rule.required().error('Subteam is required'),
      options: {
        list: [
          { title: 'Marketing and Branding', value: 'marketingAndBranding' },
          { title: 'Conferences', value: 'conferences' },
          { title: 'Admin', value: 'admin' },
        ],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile photo of the team member',
    }),
  ],
})
