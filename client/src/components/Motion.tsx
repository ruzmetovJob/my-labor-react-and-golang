import React from 'react'
import { motion as m } from 'framer-motion';

export default function Motion({children}:any):JSX.Element {
  return (
    <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.95,ease: "easeInOut" }}
    exit={{ opacity: 0 }}
    >
        {children}
    </m.div>
  )
}
