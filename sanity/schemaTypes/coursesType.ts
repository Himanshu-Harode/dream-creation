import { BookIcon } from "lucide-react"
import { defineField, defineType } from "sanity"

export const coursesType = defineType({
  name: "courses",
  title: "Courses",
  type: "document",
  icon: BookIcon,

  fields: [
    // Course Name
    defineField({
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Course Image
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
      options: { hotspot: true },
    }),

    // Level
    defineField({
      name: "level",
      title: "Course Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
        layout: "dropdown",
      },
    }),

    // Course Type
    defineField({
      name: "courseType",
      title: "Course Type",
      type: "string",
      options: {
        list: [
          { title: "Online", value: "online" },
          { title: "Offline", value: "offline" },
        ],
        layout: "dropdown",
      },
    }),

    // Duration
    defineField({
      name: "duration",
      title: "Course Duration",
      type: "string",
      description: "Example: 6 weeks / 12 weeks",
    }),

    // Course Intro Description (Hero Section)
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      description: "Short intro shown in cards and hero",
    }),

    // Students Enrolled
    defineField({
      name: "students",
      title: "Students Enrolled",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    // Live Sessions
    defineField({
      name: "liveSessions",
      title: "Live Sessions",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    // Course Price
    defineField({
      name: "price",
      title: "Course Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),

    // About Course (Large Text)
    defineField({
      name: "aboutCourse",
      title: "About Course",
      type: "text",
      rows: 6,
    }),

    // What You Will Learn
    defineField({
      name: "learningPoints",
      title: "What You Will Learn",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Add multiple learning outcomes",
    }),

    // Course Curriculum (Week Wise)
    defineField({
      name: "curriculum",
      title: "Course Curriculum",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "week",
              title: "Week",
              type: "number",
            }),

            defineField({
              name: "title",
              title: "Topic Title",
              type: "string",
            }),

            // defineField({
            //   name: "description",
            //   title: "Topic Description",
            //   type: "text",
            // }),
          ],
        },
      ],
    }),

    // Instructor Name
    defineField({
      name: "instructorName",
      title: "Instructor Name",
      type: "string",
    }),

    // Instructor Designation
    defineField({
      name: "instructorDesignation",
      title: "Instructor Designation",
      type: "string",
    }),

    // About Instructor
    defineField({
      name: "aboutInstructor",
      title: "About Instructor",
      type: "text",
      rows: 5,
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "level",
    },
  },
})
