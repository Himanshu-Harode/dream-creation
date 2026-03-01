"use client"
import { motion } from "motion/react"
import { playfair } from "@/lib/fonts"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <Image
        src="/dreambanner.jpg"
        fill
        priority
        alt="dreambanner"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#4b4b4b]/20 via-[#6b6b6b]/40 to-[#4b4b4b]/50" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        {/* TEXT (Top Center) */}
        <div className="text-center  px-4 sm:px-6 md:px-8 max-w-5xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className={`${playfair.className}
            text-white
            text-4xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            leading-tight`}
          >
            Master the Art <br />
            <span className="italic">of Beautiful Writing</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="
            text-white
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl"
          >
            Premium Calligraphy Education <br />
            for Aspiring Artists
          </motion.p>
        </div>

        {/* BUTTON (Bottom Center) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.25 }}
          className="absolute  -bottom-30 left-1/2 -translate-x-1/2"
        >
          <Link
            href="/#courses"
            className="group flex items-center gap-4 rounded-full bg-white px-5 py-2 md:px-8 text-xs md:text-lg text-black shadow-md transition-all duration-300 hover:bg-white/70 hover:shadow-lg"
          >
            Explore Courses
            <span className="flex items-center justify-center rounded-full bg-black p-2 md:p-3">
              <ArrowRight className="size-4 md:size-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
