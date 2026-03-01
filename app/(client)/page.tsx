import ContactSection from "@/components/sections/ContactSection"
import CoursesSection from "@/components/sections/CoursesSection"
import HeroSection from "@/components/sections/HeroSection"
import InstructorsSection from "@/components/sections/InstructorsSection"
import OurStorySection from "@/components/sections/OurStorySection"
import ShowCaseSection from "@/components/sections/ShowCaseSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <InstructorsSection />
      <ShowCaseSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <OurStorySection />
      <ContactSection />
    </>
  )
}
