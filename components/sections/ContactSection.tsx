import { Clock, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "../custom/ContactForm"
import ShowcaseAnimationWrapper from "../custom/ShowCaseAnimationWrapper"
import MotionItem from "../custom/MotionItem"

const ContactSection = () => {
  const contactData = [
    { icon: MapPin, title: "Location", data: "Saharanpur" },
    { icon: Phone, title: "Phone", data: "+1 (415) 555-0123" },
    { icon: Mail, title: "Email", data: "hello@dreamscreation.com" },
    { icon: Clock, title: "Hours", data: "Mon-Fri: 9AM - 6PM PST" },
  ]

  return (
    <ShowcaseAnimationWrapper
      id="contact"
      className="
      py-12
      md:py-16
      lg:py-20
      xl:py-24
      px-4
      sm:px-6
      md:px-10
      lg:px-16
      xl:px-32 dark:bg-gray-900
      "
    >
      {/* Heading */}
      <MotionItem>
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Get In Touch
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-200">
            Ready to start your calligraphy journey? Contact us today
          </p>
        </div>
      </MotionItem>

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        lg:gap-20
        mt-10
        md:mt-14
        lg:mt-16
        "
      >
        {/* Left Side */}

        <div className="flex flex-col gap-6 md:gap-8">
          {contactData.map((item) => {
            const Icon = item.icon

            return (
              <MotionItem
                key={item.title}
                className="
                flex
                gap-4
                items-start
                "
              >
                <Icon
                  size={50}
                  className="
                  p-2
                  md:p-3
                  rounded-xl
                  bg-black
                  text-white
                  dark:bg-white
                  dark:text-black
                  shrink-0
                  "
                />

                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-200">
                    {item.data}
                  </p>
                </div>
              </MotionItem>
            )
          })}
        </div>

        {/* Right Side */}
        <MotionItem>
          <ContactForm />
        </MotionItem>
      </div>
    </ShowcaseAnimationWrapper>
  )
}

export default ContactSection
