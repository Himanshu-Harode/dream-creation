"use client"

import { motion } from "motion/react"

export default function ShowcaseAnimationWrapper({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: any
  id?: any
}) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  return (
    <motion.div
      id={id}
      variants={container}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
