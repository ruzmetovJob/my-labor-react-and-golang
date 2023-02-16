import { motion as m } from "framer-motion";


export default function ButtonMotion(props:any):JSX.Element {
  return (
    <m.button whileHover={{ scale: 1.009 }} whileTap={{ scale: 0.95 }} {...props} className={"font-inter font-semibold bg-[var(--current)] text-white px-4 py-2 rounded-md flex"}>{props.children}</m.button>
  )
}
