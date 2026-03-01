import { client } from "@/sanity/lib/client"
import CourseHeroBannerSection from "@/components/sections/CourseHeroBannerSection"
import CourseAboutSection from "@/components/sections/CourseAboutSection"
import { Course } from "@/lib/courseType"

async function getCourse(slug: string): Promise<Course> {
  return client.fetch(
    `*[_type=="courses" && slug.current==$slug][0]{
      name,
      description,
      duration,
      level,
      courseType,
      students,
      liveSessions,
      price,
      aboutCourse,
      learningPoints,
      curriculum,
      instructorName,
      instructorDesignation,
      aboutInstructor,
      "image": image.asset->url
    }`,
    { slug },
  )
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const course = await getCourse(slug)

  return (
    <>
      <CourseHeroBannerSection course={course} />
      <CourseAboutSection course={course} />
    </>
  )
}
