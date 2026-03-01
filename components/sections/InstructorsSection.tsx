"use client"
import { playfair } from "@/lib/fonts"
import { Users } from "lucide-react"
import Image from "next/image"
import { easeOut, motion } from "motion/react"
const InstructorsSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18, // delay between cards
      },
    },
  }
  // Card animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // fast animation
        ease: easeOut,
      },
    },
  }
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      id="instructors"
      className=" dark:bg-gray-900
      py-12
      md:py-16
      lg:py-20
      xl:py-24
      px-4
      sm:px-6
      md:px-10
      lg:px-24
      xl:px-32
      "
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-5">
          <motion.h3
            variants={item}
            className="text-gray-600 dark:text-gray-400 text-sm uppercase"
          >
            Meet Your Instructor
          </motion.h3>

          <motion.h2
            variants={item}
            className={`${playfair.className}
            text-3xl
            sm:text-4xl
            md:text-6xl`}
          >
            Shagun Khanna
          </motion.h2>

          <motion.p variants={item} className="text-base md:text-lg">
            The First Calligrapher of Saharanpur
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-700 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-7 max-w-150"
          >
            Shagun Khanna brings exceptional expertise in calligraphy,
            engraving, and resin art. As Saharanpur's pioneering calligrapher,
            she has dedicated her career to preserving traditional techniques
            while embracing modern innovations. Her specialized approach ensures
            assured handwriting improvement for every student.
          </motion.p>

          <motion.ul
            variants={container}
            className="space-y-2 list-disc ml-5 text-sm md:text-base"
          >
            <motion.li variants={item}>
              First Calligrapher of Saharanpur
            </motion.li>
            <motion.li variants={item}>
              Expert in Engraving & Resin Art
            </motion.li>
            <motion.li variants={item}>
              Assured Handwriting Improvement
            </motion.li>
          </motion.ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 w-full relative">
          <div className="relative h-75 sm:h-100 md:h-[450px] lg:h-125 w-full">
            <motion.img
              variants={item}
              src="/instructorimg.jpg"
              alt="instructor"
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            variants={item}
            className="
            shadow-lg
            flex
            gap-3
            absolute
            -left-6
            -bottom-2    
            rounded-xl
            p-4
            md:p-6
            bg-white dark:bg-gray-800
            "
          >
            <Users className="p-3 md:p-4 bg-gray-200 dark:bg-gray-600 rounded-xl size-10 md:size-14" />

            <div>
              <p className={`${playfair.className} text-xl md:text-3xl`}>
                2,500+
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm ">
                Students Taught
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default InstructorsSection
