import { playfair } from "@/lib/fonts"
import CoursesCardGrid from "../custom/CoursesCardGrid"
import { client } from "@/sanity/lib/client"
interface Course {
  _id: string
  courseType: string
  description: string
  level: string
  name: string
  duration: string
  slug: {
    current: string
  }
  image?: {
    asset?: {
      url: string
    }
  }
}

async function getCourses(): Promise<Course[]> {
  return await client.fetch(`
    *[_type=="courses"] | order(_createdAt){
      _id,
      courseType,
      description,
      level,
      name,
      duration,
      slug,
      image{
        asset->{
          url
        }
      }
    }
  `)
}
const CoursesSection = async () => {
  const data = await getCourses()

  return (
    <section
      className="
      py-12
      md:py-16
      lg:py-20
      xl:py-24
      px-4
      sm:px-6
      md:px-10
      lg:px-16
      xl:px-24
      "
      id="courses"
    >
      {/* Heading */}
      <div className="space-y-4 md:space-y-5 max-w-xl">
        <h3 className="uppercase tracking-wide text-slate-800 dark:text-slate-400 text-sm">
          our programs
        </h3>

        <h2
          className={`${playfair.className}
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl`}
        >
          Signature Courses
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg">
          Comprehensive calligraphy education tailored to your journey, from
          first strokes to mastery
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 md:mt-14 lg:mt-16">
        <CoursesCardGrid data={data} />
      </div>
    </section>
  )
}

export default CoursesSection
