import React from 'react'
import { cn } from '../lib/utils'

export const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-7xl mx-auto ", className)}>{children}</div>
    // px-4 md:px-6 - classname me tha
  )
}
