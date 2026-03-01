"use client"

import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { playfair } from "@/lib/fonts"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { useTheme } from "next-themes" // Import useTheme

const navLinks = [
  { name: "Courses", path: "/#courses" },
  { name: "Instructors", path: "/#instructors" },
  { name: "Showcase", path: "/#showcase" },
  { name: "Testimonials", path: "/#testimonial" },
  { name: "Contact", path: "/#contact" },
]

const Navbar = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const { resolvedTheme } = useTheme() // Get current theme

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Determine background color based on scroll state and theme
  const getBackgroundColor = () => {
    if (!scrolled) return "rgba(255,255,255,0)" // transparent
    // When scrolled, use white in light mode, black in dark mode
    return resolvedTheme === "dark"
      ? "rgba(0,0,0,0.95)"
      : "rgba(255,255,255,0.95)"
  }

  return (
    <motion.nav
      animate={{
        backgroundColor: getBackgroundColor(),
        boxShadow: scrolled ? "0px 5px 20px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="
        fixed top-0 left-0 right-0 z-50
        py-4
        flex items-center justify-between
        px-6 lg:px-14 xl:px-32
        backdrop-blur-md
        dark:bg-black/70   /* fallback / base */
      "
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/dreamlogo.jpeg"
          height={100}
          width={100}
          alt="logo"
          className="size-10 rounded-full"
        />
        <h1
          className={`${playfair.className} text-lg lg:text-xl ${
            scrolled ? "text-black dark:text-white" : "text-white"
          }`}
        >
          Dreams Creation
        </h1>
      </Link>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex items-center gap-10">
        <div
          className={`flex gap-10 font-semibold ${
            scrolled ? "text-black dark:text-white" : "text-white"
          }`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:opacity-70 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button
            className={`
              rounded-full px-6 py-5 font-semibold
              ${
                scrolled
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-black"
              }
            `}
          >
            Enroll Now
          </Button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden flex items-center gap-4">
        <ModeToggle />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 p-6">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              {/* Links */}
              <div className="space-y-6 mt-10">
                {navLinks.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.path}
                      className="
                        block text-lg border-b pb-3 font-medium
                        hover:opacity-70
                        dark:text-white   /* ensure white text in dark mode */
                      "
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-auto">
                <Button className="w-full py-6 text-lg font-semibold">
                  Enroll Now
                </Button>
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export default Navbar
