"use client"

import { motion, Variants } from "motion/react"

export default function MotionItem({
  children,
}: {
  children: React.ReactNode
}) {
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1], // smooth easing
      },
    },
  }

  return <motion.div variants={item}>{children}</motion.div>
}
