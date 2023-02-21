import { motion as m } from "framer-motion";


export default function ButtonMotion(props:any):JSX.Element {
  return (
    <m.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }} {...props} className={"py-4 px-6 font-inter font-medium text-[18px] text-white bg-current-gradient rounded-[10px] outline-none flex"}>{props.children}</m.button>
  )
}
