"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Users } from "lucide-react"
import { Button } from "../ui/button"
import { Course } from "@/lib/courseType"

interface Props {
  course: Course
}

const CourseSidebar = ({ course }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
      space-y-6
      lg:sticky
      lg:top-24
      "
    >
      {/* Price Card */}

      <div
        className="
      p-6 md:p-8
      bg-gray-50 dark:bg-gray-800
      rounded-xl
      shadow
      space-y-6
      "
      >
        <div className="text-center space-y-3">
          <p className="text-3xl md:text-4xl font-bold">₹{course.price}</p>

          <p className="text-sm">One Time Payment</p>

          <Button className="w-full rounded-full py-5 md:py-6">
            Enroll Now
          </Button>
        </div>

        <hr />

        <ul className="space-y-3 md:space-y-4">
          <li className="flex text-sm gap-3">
            <Award size={18} />
            Certificate of Completion
          </li>

          <li className="flex text-sm gap-3">
            <BookOpen size={18} />
            Lifetime Access
          </li>

          <li className="flex text-sm gap-3">
            <Users size={18} />
            Live Interactive Sessions
          </li>
        </ul>
      </div>

      {/* Instructor */}

      <div
        className="
      p-6 md:p-8 dark:bg-gray-800
      bg-gray-50
      rounded-xl
      shadow
      space-y-5
      "
      >
        <p className="font-semibold">Your Instructor</p>

        <div className="flex items-center gap-3">
          <p
            className="
          px-4
          py-2
          text-xl
          rounded-full
          bg-gray-200 dark:bg-gray-700
          "
          >
            {course.instructorName?.charAt(0)}
          </p>

          <div>
            <p className="font-medium">{course.instructorName}</p>

            <p className="text-sm text-gray-600 dark:text-gray-200">
              {course.instructorDesignation}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-200">
          {course.aboutInstructor}
        </p>
      </div>
    </motion.div>
  )
}

export default CourseSidebar
