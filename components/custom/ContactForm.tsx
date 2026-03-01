"use client"

import { sendMail } from "@/actions/sendmail"
import { useFormStatus } from "react-dom"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="
      bg-black
      text-white
      dark:bg-white
      dark:text-black
      w-full
      py-3
      md:py-4
      rounded-lg
      font-semibold
      transition
      hover:bg-black/80
      disabled:opacity-60
      "
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default function ContactForm() {
  return (
    <form
      action={sendMail}
      className="
      w-full
      max-w-xl
      bg-gray-50
      dark:bg-gray-800
      p-5
      md:p-8
      rounded-2xl
      space-y-5
      md:space-y-6
      shadow-sm
      "
    >
      {/* Name */}

      <div>
        <Label className="mb-2 block text-sm md:text-base">Your Name</Label>

        <Input
          name="name"
          required
          placeholder="John Doe"
          className="
          bg-white
          h-11
          md:h-12
          px-4
          rounded-lg
          focus:ring-2
          focus:ring-black
          "
        />
      </div>

      {/* Email */}

      <div>
        <Label className="mb-2 block text-sm md:text-base">Email Address</Label>

        <Input
          name="email"
          type="email"
          required
          placeholder="john@email.com"
          className="
          bg-white
          h-11
          md:h-12
          px-4
          rounded-lg
          focus:ring-2
          focus:ring-black
          "
        />
      </div>

      {/* Message */}

      <div>
        <Label className="mb-2 block text-sm md:text-base">Message</Label>

        <Textarea
          name="message"
          required
          placeholder="Tell us about your interest in calligraphy..."
          className="
          bg-white
          min-h-[130px]
          px-4
          py-3
          rounded-lg
          focus:ring-2
          focus:ring-black
          "
        />
      </div>

      <SubmitButton />
    </form>
  )
}
