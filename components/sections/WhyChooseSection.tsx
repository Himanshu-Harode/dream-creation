"use client"

import { playfair } from "@/lib/fonts"
import { ArrowRight, Award, Package, Play, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ShowcaseAnimationWrapper from "../custom/ShowCaseAnimationWrapper"
import MotionItem from "../custom/MotionItem"

const cardData = [
  {
    icon: Play,
    title: "Expert Video Instruction",
    description:
      "Learn from professionally produced video lessons with multiple camera angles, close-ups, and detailed explanations of every technique.",
  },
  {
    icon: Package,
    title: "Premium Practice Kits",
    description:
      "Receive curated materials including high-quality paper, professional-grade inks, and carefully selected pens and brushes for each course.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join our vibrant community of calligraphy enthusiasts. Share your work, get feedback, and connect with fellow students worldwide.",
  },
  {
    icon: Award,
    title: "Certification Program",
    description:
      "Earn recognized certificates upon course completion. Build your portfolio and credentials for professional calligraphy opportunities.",
  },
]

const WhyChooseSection = () => {
  return (
    <ShowcaseAnimationWrapper
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
      space-y-12
      "
    >
      {/* Heading */}

      <div className="text-center space-y-4 max-w-5xl mx-auto">
        <MotionItem>
          <p className="text-sm uppercase border px-6 py-2 rounded-full w-fit mx-auto">
            Why Choose Us
          </p>

          <h2
            className={`${playfair.className}
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl`}
          >
            Everything You Need to Excel
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-white">
            Comprehensive education, premium materials, and lifetime support
          </p>
        </MotionItem>
      </div>

      {/* Cards */}

      <div
        className=" max-w-7xl mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
      >
        {cardData.map((item, index) => {
          const Icon = item.icon

          return (
            <MotionItem key={index}>
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                  rest: { y: 0 },
                  hover: { y: -8 },
                }}
                transition={{ duration: 0.3 }}
                className="
              border
              p-6
              rounded-xl
              space-y-4
              hover:shadow-md
              transition
              "
              >
                <Icon size={28} />

                <h3 className={`${playfair.className} text-xl`}>
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.description}</p>

                <Link
                  href="#courses"
                  className="flex gap-2 items-center text-sm"
                >
                  Explore Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            </MotionItem>
          )
        })}
      </div>
    </ShowcaseAnimationWrapper>
  )
}

export default WhyChooseSection
