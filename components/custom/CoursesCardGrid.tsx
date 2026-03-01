"use client"
import { playfair } from "@/lib/fonts"
import { Clock, ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"

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

export default function CoursesCardGrid({ data }: any) {
  // Parent container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // delay between cards
      },
    },
  }

  // Card animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // fast animation
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {data.map((itemData: Course) => (
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          key={itemData._id}
          className="rounded-xl relative overflow-hidden bg-gray-50 dark:bg-gray-900 shadow"
        >
          {/* Image */}
          <div className="relative w-full">
            <img
              src={itemData.image?.asset?.url || "/placeholder.jpg"}
              alt={itemData.name}
              className="object-cover w-full h-56"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-2">
            <h3 className={`${playfair.className} text-xl`}>{itemData.name}</h3>

            <div className="flex gap-5">
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock size={16} />
                {itemData.duration}
              </span>

              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Users size={16} />
                {itemData.courseType}
              </span>
            </div>

            <p className="text-gray-400 text-sm">{itemData.description}</p>

            <div className="absolute bg-white text-black rounded-full top-5 text-xs capitalize px-3 py-1 font-semibold right-5">
              {itemData.level}
            </div>

            <Link
              href={`/courses/${itemData.slug.current}`}
              className="group flex items-center text-sm mt-8 gap-2"
            >
              Learn More
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
