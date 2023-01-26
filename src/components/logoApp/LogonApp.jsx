
import { motion } from "framer-motion"

import './logoApp.css'


const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    //   fill: "red"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    //   fill: "green"
    }
  };

export default function LogonApp() {
    return (
        <div className='logo'>
            <motion.svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1242" viewBox="0 0 43.353 21.546">
                <motion.path 
                    d="M40.865 10.764c.747.59 1.723 1.895 1.287 4.572-.729 4.419-4.019 6.21-11.218 6.21h-1.17l2.88-10.418 8.221-.364zM33.849 0h3.24s6.471 0 6.259 4.594c-.13 2.853-1.35 4.378-2.25 5.121l-7.87-.738L33.849 0zM2.092 9.706L3.807 0h12.208s5.427-.05 7.768 5.742L24.935 0h7.947l-2.214 8.977-14.733.374c.351-4.675-2.367-4.621-2.367-4.621h-1.629l-.855 4.747-8.992.229zM22.009 15.282s-3.438 6.264-11.421 6.264H0l1.926-10.908 8.923.157-1.048 5.819h1.633c1.107 0 3.514-1.602 4.297-5.733l14.481.247-1.031 10.418h-8.365l1.193-6.264z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </div>
    )
}
