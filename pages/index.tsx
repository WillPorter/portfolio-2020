import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from "react";

const Home = () => {

  return(
  

      <>
        <div className="home">
        <div className="home__inner">
          <motion.h1 initial="initial" animate="animate" transition={{delay: 1, duration: .6 }} variants={{
            initial: {
              opacity: 0,
              x: "100%",
              scale: .5,
            },
            animate: {
              opacity: 1,
              x: "0",
              scale: 1,
            },
          }}
            >Will Porter</motion.h1>
          <motion.span initial="initial" animate="animate" transition={{delay: 1, duration: 1.25}} variants={{
            initial: {
              opacity: 0,
              x: "-100%",
              scale: .5,
            },
            animate: {
              opacity: 1,
              x: "0",
              scale: 1,
            },
          }}
          >Web Developer</motion.span>
        </div>
        </div>
      </>
      
);
}

export default Home;
