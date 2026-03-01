import { playfair } from "@/lib/fonts"
import { client } from "@/sanity/lib/client"
import ShowcaseGallery from "../custom/ShowcaseGallery"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import MotionItem from "../custom/MotionItem"
import ShowcaseAnimationWrapper from "../custom/ShowCaseAnimationWrapper"

interface Gallery {
  _id: string
  authorName: string
  scriptType: string
  gallaryImage?: {
    asset?: {
      url: string
    }
  }
}

async function getShowcaseGallery(): Promise<Gallery[]> {
  return await client.fetch(`
    *[_type=="gallery"] | order(_createdAt asc){
      _id,
      authorName,
      scriptType,
      gallaryImage{
        asset->{
          url
        }
      }
    }
  `)
}

const ShowCaseSection = async () => {
  const data = await getShowcaseGallery()

  return (
    <section
      id="showcase"
      className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <ShowcaseAnimationWrapper>
        {/* Heading */}
        <MotionItem className="text-center space-y-4 max-w-250 mx-auto">
          <h3 className="uppercase text-sm md:text-base">Student Showcase</h3>

          <h2
            className={`${playfair.className}
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl`}
          >
            Beautiful Work from Our Community
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-white">
            See the transformation from beginner to confident calligrapher
            through our <br />
            students' incredible creations
          </p>
        </MotionItem>

        {/* Gallery */}
        <div className="mt-10 md:mt-14 lg:mt-16">
          <ShowcaseGallery data={data} />
        </div>

        {/* Button */}
        <MotionItem>
          <Link
            href="/gallery"
            className="
          w-fit
          mx-auto
          mt-10
          flex
        items-center
        gap-2
        bg-black
        text-white
        dark:bg-white
        dark:text-black
        px-6
        py-3
        md:px-8
        md:py-4
        rounded-full
        text-sm
        md:text-base
        "
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </MotionItem>
      </ShowcaseAnimationWrapper>
    </section>
  )
}

export default ShowCaseSection
