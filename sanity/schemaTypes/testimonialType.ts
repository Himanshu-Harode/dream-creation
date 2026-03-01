import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: TagIcon,
  fields: [

    // Author Name
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    // Graduate course name
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    // Script type
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    // Star Rating
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'string',
      validation: Rule => Rule.max(5).min(0).required(),
    }),

    // Gallery Images (Multiple Images)
    defineField({
      name: 'profile',
      title: 'Profile Image',
          type: 'image',
          options: {
            hotspot: true
          },
      validation: Rule => Rule.required()
    }),
  ],
   preview: {
    select: {
      title: 'authorName',
      media: 'profile',
      subtitle:"heading"
    }
  }
})
