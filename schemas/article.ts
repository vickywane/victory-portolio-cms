import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      title: 'Summary',
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'is_travel_featured',
      title: 'Is Travel Featured?',
      type: 'boolean',
    }),
    defineField({
      name: 'is_external',
      title: 'Is External?',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags for item',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'tag',
        }),
      ],
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'cloudinary.asset',
      description: "Article cover image stored on Cloudinary",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publish_date',
      title: 'Publish Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },
  },
})
