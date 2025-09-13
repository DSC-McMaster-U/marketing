import { defineField, defineType } from 'sanity'

export const teamSchema = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    // Array of teams
    defineField({
      name: 'teams',
      title: 'Teams',
      type: 'array',
      of: [
        {
          name: 'team',
          type: 'object',
          title: 'Team',
          fields: [
            defineField({
              name: 'name',
              title: 'Team Name',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Team name is required'),
            }),
            defineField({
              name: 'description',
              title: 'Team Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Icon of the team',
              validation: (Rule) => Rule.required().error('Icon is required'),
            }),
            defineField({
              name: 'members',
              title: 'Members',
              type: 'array',
              of: [
                {
                  name: 'member',
                  type: 'object',
                  title: 'Member',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required().error('Member name is required'),
                    }),
                    defineField({
                      name: 'position',
                      title: 'Position',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required().error('Position is required'),
                    }),
                    defineField({
                      name: 'hoverContent',
                      title: 'Hover Content',
                      type: 'string',
                      description: 'Content shown on hover of member card',
                    }),
                    defineField({
                      name: 'picture',
                      title: 'Picture',
                      type: 'image',
                      description: 'Profile picture of the member',
                      options: {
                        hotspot: true, // Enable image cropping
                      },
                    }),
                  ],
                },
              ],
            }),
            defineField({
              name: 'projects',
              title: 'Projects',
              type: 'array',
              of: [
                {
                  name: 'project',
                  type: 'object',
                  title: 'Project',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: (Rule) =>
                        Rule.required().error('Project name is required'),
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      validation: (Rule) =>
                        Rule.required().error('Description is required'),
                    }),
                    defineField({
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      description: 'Image of the project',
                      options: {
                        hotspot: true, // Enable image cropping
                      },
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'url',
                      description: 'Link to the project',
                      validation: (Rule) =>
                        Rule.required().error('Link is required'),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
