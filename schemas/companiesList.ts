import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'companies_list',
  title: 'Companies List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    
    
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },
  },
})
