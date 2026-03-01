"use client"

import { playfair } from "@/lib/fonts"
import { StarFilledIcon } from "@sanity/icons"
import { Star } from "lucide-react"
import { motion } from "motion/react"
import ShowcaseAnimationWrapper from "./ShowCaseAnimationWrapper"
import MotionItem from "./MotionItem"

interface Props {
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

const TestimonialsCards = ({ data }: { data: Props[] }) => {
  return (
    <ShowcaseAnimationWrapper
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-5
      md:gap-6
      lg:gap-8
      pt-8
      md:pt-12
      lg:pt-16
      "
    >
      {data.map((item) => (
        <MotionItem key={item._id}>
          <motion.div
            className="
          bg-white dark:bg-gray-200
          p-4
          md:p-6
          rounded-xl
          shadow-sm
          hover:shadow-md
          cursor-pointer
          transition
          "
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.02 },
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            {/* Rating */}

            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i < item.rating ? (
                    <StarFilledIcon className="text-3xl text-amber-400" />
                  ) : (
                    <Star className="" size={20} />
                  )}
                </span>
              ))}
            </div>

            {/* Heading */}

            <h3
              className={`${playfair.className}
            text-lg
            md:text-xl text-black`}
            >
              {item.heading}
            </h3>

            {/* Description */}

            <p className="text-gray-600  text-sm md:text-base mt-2">
              {item.description}
            </p>

            {/* Profile */}

            <hr className="my-4 md:my-6" />

            <div className="flex items-center gap-3">
              <img
                src={item.profile?.asset?.url}
                className="
              w-9 h-9
              md:w-10 md:h-10
              rounded-full 
              object-cover
              "
                alt={item.authorName}
              />

              <div>
                <p className="font-medium text-sm text-black md:text-base">
                  {item.authorName}
                </p>

                <p className="text-xs md:text-sm text-gray-500">
                  {item.courseName}
                </p>
              </div>
            </div>
          </motion.div>
        </MotionItem>
      ))}
    </ShowcaseAnimationWrapper>
  )
}

export default TestimonialsCards
