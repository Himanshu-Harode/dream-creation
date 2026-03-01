"use client"

import { playfair } from "@/lib/fonts"
import { motion } from "motion/react"
import ShowcaseAnimationWrapper from "./ShowCaseAnimationWrapper"
import MotionItem from "./MotionItem"

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

const ShowcaseGallery = ({ data }: { data: Gallery[] }) => {
  return (
    <div
      className="
      mt-8
      md:mt-12
      lg:mt-16
      columns-2
      lg:columns-3
      xl:columns-4
      gap-4
      md:gap-5
      lg:gap-6
      space-y-4
      md:space-y-5
      lg:space-y-6
      "
    >
      <ShowcaseAnimationWrapper>
        {data.map((item) => (
          <MotionItem key={item._id}>
            <motion.div
              className="
          break-inside-avoid
          relative
          rounded-xl
          overflow-hidden
          cursor-pointer
          "
              variants={{
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.3 }}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Image */}

              <motion.img
                src={item.gallaryImage?.asset?.url}
                variants={{
                  rest: { scale: 1 },
                }}
                className="w-full object-cover min-h-50 sm:min-h-60 md:min-h-70 lg:min-h-75
            shadow-lg
            "
                alt={item.authorName}
              />

              {/* Small Author Label */}

              <h3 className="absolute right-4 top-4 text-xs md:text-sm text-white bg-black/40 px-2 py-1 rounded">
                {item.authorName}
              </h3>

              {/* Overlay */}

              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="
            absolute
            inset-0
            flex
            flex-col
            justify-end
            p-3
            md:p-4
            bg-black/30
            "
              >
                <h3
                  className={`${playfair.className}
              text-white
              text-base
              md:text-lg`}
                >
                  {item.authorName}
                </h3>

                <p className="text-white/80 text-xs md:text-sm">
                  {item.scriptType}
                </p>
              </motion.div>
            </motion.div>
          </MotionItem>
        ))}
      </ShowcaseAnimationWrapper>
    </div>
  )
}

export default ShowcaseGallery
