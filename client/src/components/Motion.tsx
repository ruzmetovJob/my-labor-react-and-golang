import React from 'react'
import { motion as m, AnimatePresence } from 'framer-motion';

export default function Motion({ children }: any): JSX.Element {
  return (
    <AnimatePresence  mode={ 'wait' }>
      <m.div
        initial={{ y: 20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  )
}
