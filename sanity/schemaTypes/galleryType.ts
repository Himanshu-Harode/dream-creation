import { defineField, defineType } from "sanity"
import { ImageIcon } from "@sanity/icons"

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: ImageIcon,

  fields: [
    // Author Name
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Script type
    defineField({
      name: "scriptType",
      title: "Script Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Gallery Images (Multiple Images)
    defineField({
      name: "gallaryImage",
      title: "Gallery Images",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "authorName",
      media: "gallaryImage",
    },
  },
})
