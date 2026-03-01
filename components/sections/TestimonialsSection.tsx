import { playfair } from "@/lib/fonts"
import { client } from "@/sanity/lib/client"
import TestimonialsCards from "../custom/TestimonialsCards"
import MotionItem from "../custom/MotionItem"
import ShowcaseAnimationWrapper from "../custom/ShowCaseAnimationWrapper"

interface Testimonials {
  _id: string
  authorName: string
  courseName: string
  profile?: {
    asset?: {
      url: string
    }
  }
  heading: string
  description: string
  rating: number
}

async function getTestimonials(): Promise<Testimonials[]> {
  return await client.fetch(`
    *[_type=="testimonial"] | order(_createdAt asc){
      _id,
      authorName,
      courseName,
      heading,
      description,
      rating,
      profile{
        asset->{
          url
        }
      }
    }
  `)
}

const TestimonialsSection = async () => {
  const data = await getTestimonials()

  return (
    <section
      id="testimonial"
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
    >
      {/* Heading */}
      <ShowcaseAnimationWrapper>
        <MotionItem>
          <div className="text-center space-y-4 max-w-300 mx-auto">
            <h2
              className={`${playfair.className}
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl`}
            >
              What Our Students Say About Their Journey
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-white">
              Real stories from calligraphers who transformed their skills with
              us
            </p>
          </div>
        </MotionItem>

        {/* Cards */}
        <div className="mt-10 md:mt-14 lg:mt-16">
          <TestimonialsCards data={data} />
        </div>
      </ShowcaseAnimationWrapper>
    </section>
  )
}

export default TestimonialsSection
