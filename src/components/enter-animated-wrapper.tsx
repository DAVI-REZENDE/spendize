import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

interface EnterAnimatedWrapperProps extends ComponentProps<typeof motion.div> {}

export function EnterAnimatedWrapper({ ...props }: EnterAnimatedWrapperProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -70,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.7 }}
      {...props}
    />
  )
}
