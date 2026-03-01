"use client"

import { motion, Variants } from "motion/react"

export default function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: any
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

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
