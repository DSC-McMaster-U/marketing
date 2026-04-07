import { orderRankField } from '@sanity/orderable-document-list'
import { defineField, defineType } from 'sanity'

export const faqSchema = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  preview: {
    select: {
      title: 'question',
    },
  },
  fields: [
    orderRankField({ type: 'faq' }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description:
        'The question being asked (e.g. "What is the the best club?")',
      validation: (Rule) => Rule.required().error('Question is required'),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      description: 'The answer to the question (e.g. "GDG is the best club!")',
      validation: (Rule) => Rule.required().error('Answer is required'),
    }),
    defineField({
      name: 'showButton',
      title: 'Show Button',
      type: 'boolean',
      description: 'Show a button after this FAQ answer',
      initialValue: false,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text to display on the button',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const showButton = (context.document as { showButton?: boolean })
            ?.showButton
          if (showButton && !value) {
            return 'Button text is required when button is enabled'
          }
          return true
        }),
      hidden: ({ document }) => !document?.showButton,
    }),
    defineField({
      name: 'buttonIcon',
      title: 'Button Icon',
      type: 'image',
      description: 'Optional icon to display in the button',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => !document?.showButton,
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      description: 'The link for the button',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const showButton = (context.document as { showButton?: boolean })
            ?.showButton
          if (showButton && !value) {
            return 'Button link is required when button is enabled'
          }
          return true
        }).uri({
          scheme: ['http', 'https', 'mailto'],
        }),
      hidden: ({ document }) => !document?.showButton,
    }),
  ],
})
