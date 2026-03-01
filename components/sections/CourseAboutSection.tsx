import { Course } from "@/lib/courseType"
import { playfair } from "@/lib/fonts"
import { Calendar, CircleCheck, Clock, Users } from "lucide-react"
import CourseSidebar from "../custom/CourseSideBar"

interface Props {
  course: Course
}

const CourseAboutSection = ({ course }: Props) => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-32">
      {/* Stats Bar */}

      <div
        className=" dark:bg-gray-800
        bg-gray-100
        shadow

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-24

        py-5
        md:py-6

        flex
        flex-col
        md:flex-row
        gap-4
        md:gap-0

        md:items-center
        md:justify-between
        "
      >
        {/* Left Stats */}

        <div
          className="
          flex
          flex-wrap
          gap-5
          md:gap-10
          "
        >
          <div className="flex gap-2 items-center text-sm md:text-base">
            <Clock size={18} />
            <p>{course.duration}</p>
          </div>

          <div className="flex gap-2 items-center text-sm md:text-base">
            <Users size={18} />
            <p>{course.students}+ Students</p>
          </div>

          <div className="flex gap-2 items-center text-sm md:text-base">
            <Calendar size={18} />
            <p>{course.liveSessions} Live Sessions</p>
          </div>
        </div>

        {/* Price */}

        <p className="font-bold text-xl md:text-2xl">₹{course.price}</p>
      </div>

      {/* Main Layout */}

      <div
        className="
        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-0

        mt-10
        md:mt-16

        flex
        flex-col
        lg:flex-row

        gap-10
        lg:gap-16
        "
      >
        {/* LEFT CONTENT */}

        <div className="flex-1">
          {/* About */}

          <h3
            className={`${playfair.className} text-2xl md:text-3xl mb-5 md:mb-6`}
          >
            About This Course
          </h3>

          <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-sm md:text-base">
            {course.aboutCourse}
          </p>

          {/* Learning */}

          <div className="mt-10 md:mt-12">
            <h3
              className={`${playfair.className} text-2xl md:text-3xl mb-5 md:mb-6`}
            >
              What You'll Learn
            </h3>

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              md:gap-4
              "
            >
              {course.learningPoints?.map((point: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CircleCheck size={20} />

                  <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}

          <div className="mt-14 md:mt-20">
            <h3
              className={`${playfair.className} text-2xl md:text-3xl mb-5 md:mb-6`}
            >
              Course Curriculum
            </h3>

            <div className="space-y-4 md:space-y-5">
              {course.curriculum?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="
                  flex
                  gap-4
                  p-4
                  rounded-lg
                  bg-gray-100 dark:bg-gray-800
                  "
                >
                  <p
                    className="
                  p-4
                  text-lg
                  md:text-xl
                  rounded-full
                  bg-black
                  text-white
                  dark:text-black
                  dark:bg-white
                  "
                  >
                    {item.week}
                  </p>

                  <div>
                    <p className="font-medium">Week {item.week}</p>

                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}

        <div className="w-full lg:w-[350px]">
          <CourseSidebar course={course} />
        </div>
      </div>
    </section>
  )
}

export default CourseAboutSection
