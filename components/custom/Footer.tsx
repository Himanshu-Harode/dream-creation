import { playfair } from "@/lib/fonts"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer
      className="
      px-4
      sm:px-6
      md:px-10
      lg:px-16
      xl:px-24
      py-12
      md:py-16
      lg:py-20
      "
    >
      <div
        className=" justify-between
        grid
        sm:grid-cols-2
        lg:grid-cols-5
        gap-10
        mb-10
        "
      >
        {/* Column 1 */}

        <div className="space-y-6 col-span-2  max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src="/dreamlogo.jpeg"
              className="w-12 md:w-14 rounded-full"
              height={200}
              width={200}
              alt="logo"
            />

            <h1 className={`${playfair.className} text-xl md:text-2xl`}>
              Dreams Creation
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-white">
            Empowering aspiring calligraphers worldwide with premium education,
            premium materials, and a supportive community.
          </p>

          {/* Newsletter */}

          <div className="space-y-3">
            <p className="font-medium">Stay Inspired</p>

            <Input
              className="border-0 border-b rounded-none"
              placeholder="Enter your email"
            />

            <Button
              variant="outline"
              className="
              w-full
              py-3
              md:py-4
              text-sm
              md:text-base
              "
            >
              Subscribe <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Column 2 */}

        <div className="space-y-6 text-sm">
          <h2 className="uppercase font-medium">Courses</h2>

          <ul className="space-y-3 text-gray-600 dark:text-white">
            <li>Beginner Calligraphy</li>
            <li>Modern Script</li>
            <li>Traditional Copperplate</li>
            <li>Brush Lettering</li>
            <li>Wedding Calligraphy</li>
            <li>Business Calligraphy</li>
          </ul>
        </div>

        {/* Column 3 */}

        <div className="space-y-6 text-sm">
          <h2 className="uppercase font-medium">Resources</h2>

          <ul className="space-y-3 text-gray-600 dark:text-white">
            <li>Free Tutorials</li>
            <li>Practice Sheets</li>
            <li>Tool Guides</li>
            <li>Student Gallery</li>
            <li>Blog & Tips</li>
            <li>Business Calligraphy</li>
          </ul>
        </div>

        {/* Column 4 */}

        <div className="space-y-6 text-sm">
          <h2 className="uppercase font-medium">Connect</h2>

          <ul className="space-y-3 text-gray-600 dark:text-white">
            <li>About Us</li>
            <li>Contact</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="mt-6 text-sm text-gray-500 text-center md:text-left">
        © 2025 Dreams Creation. Empowering calligraphers worldwide.
      </p>
    </footer>
  )
}

export default Footer
