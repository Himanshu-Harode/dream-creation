import { playfair } from "@/lib/fonts"
import BackButton from "../custom/BackButton"

interface Props {
  course: any
}

const CourseHeroBannerSection = ({ course }: Props) => {
  return (
    <section
      className="
      relative
      w-full
      h-80
      sm:h-95
      md:h-[450px]
      lg:h-130
      overflow-hidden
      "
    >
      {/* Background Image */}

      <img
        src={course.image}
        className="absolute inset-0 w-full h-full object-cover"
        alt={course.name}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}

      <div
        className="
        relative
        h-full
        flex
        flex-col
        justify-center
        gap-4
        max-w-6xl
        mx-auto

        px-4
        sm:px-6
        md:px-10
        lg:px-16
        xl:px-0
        "
      >
        <div className="flex gap-4 items-center">
          <BackButton />

          <p
            className="
          capitalize
          rounded-full
          px-3
          py-1
          text-xs
          md:text-sm
          bg-white text-black
          "
          >
            {course.level}
          </p>
        </div>

        <h2
          className={`
          ${playfair.className}
          text-white
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          `}
        >
          {course.name}
        </h2>

        <p
          className="
          text-white
          text-sm
          sm:text-base
          md:text-lg
          max-w-3xl
          "
        >
          {course.description}
        </p>
      </div>
    </section>
  )
}

export default CourseHeroBannerSection
