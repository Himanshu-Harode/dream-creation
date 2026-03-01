import { playfair } from "@/lib/fonts"
import ShowcaseAnimationWrapper from "../custom/ShowCaseAnimationWrapper"
import MotionItem from "../custom/MotionItem"

const OurStorySection = () => {
  return (
    <ShowcaseAnimationWrapper className="relative py-16 md:py-24 lg:py-32 px-6 md:px-10 overflow-hidden">
      {/* Top Decorative Line */}
      <svg
        viewBox="0 0 100 100"
        className="w-32 top-0 left-0 absolute lg:w-48  text-gray-400 mx-auto mb-6"
      >
        <path
          fill="none"
          d="M0,50 Q25,10 50,50 T100,50"
          stroke="gray"
          strokeWidth="1"
        />
      </svg>

      <div className="max-w-4xl mx-auto mt-28 flex flex-col items-center gap-6 relative">
        {/* Decorative Curves */}
        <MotionItem>
          <svg
            viewBox="0 0 100 100"
            className="
          hidden md:block
          w-28
          absolute
          -top-28
          -rotate-12
          text-gray-300
          "
          >
            <path
              fill="none"
              d="M100,50 Q75,90 50,50 T0,50"
              stroke="gray"
              strokeWidth="1"
            />
          </svg>

          <svg
            viewBox="0 0 100 100"
            className="
          hidden md:block
          w-20
          absolute
          -top-24
          text-gray-300
          "
          >
            <path
              fill="none"
              d="M100,50 Q75,90 50,50 T0,50"
              stroke="gray"
              strokeWidth="1"
            />
          </svg>
        </MotionItem>

        {/* Heading */}
        <MotionItem className="text-center">
          <h3 className="uppercase font-semibold text-sm md:text-base">
            Our Story & Mission
          </h3>
        </MotionItem>
        {/* Main Text */}
        <MotionItem>
          <p
            className={`
              ${playfair.className}
              text-2xl
              sm:text-3xl
          md:text-4xl
          text-center
          leading-relaxed
          `}
          >
            Dreams Creation was founded with a singular vision: to preserve the
            timeless art of calligraphy while making it accessible to modern
            learners. We believe that the meditative practice of beautiful
            writing has the power to transform not just your handwriting, but
            your entire creative perspective.
          </p>
        </MotionItem>
        {/* Description */}
        <MotionItem>
          <p className="text-center max-w-3xl text-sm md:text-base lg:text-lg text-gray-600 dark:text-white leading-relaxed">
            Every stroke tells a story, and every student who joins us becomes
            part of a tradition that spans centuries. Our commitment is to guide
            you with patience, expertise, and genuine passion for this
            magnificent art form. Together, we write the future of calligraphy.
          </p>

          {/* Icon */}

          <div className="text-3xl md:text-4xl w-fit mx-auto mt-10 bg-gray-200 dark:bg-transparent p-2 rounded-md">
            ✒️
          </div>
        </MotionItem>
      </div>

      {/* Bottom Decoration */}

      <svg
        viewBox="0 0 100 100"
        className="
        hidden lg:block
        w-48
        absolute
        bottom-0
        right-0
        text-gray-300"
      >
        <path
          fill="none"
          d="M100,50 Q75,90 50,50 T0,50"
          stroke="gray"
          strokeWidth="1"
        />
      </svg>
    </ShowcaseAnimationWrapper>
  )
}

export default OurStorySection
