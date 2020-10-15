import '../styles/main.scss'
import App, { Container } from 'next/app';
import Page from '../components/Page';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Particles from '../components/Particles';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Particles />
        <Container>
        
          <AnimatePresence exitBeforeEnter >
          
            <Page key={router.route}>
            
            <motion.div  initial="initial" animate="animate" exit="exit" transition={{ duration : .75 }} variants={{
              initial: {
                opacity: 0,
                x: "-100%"
              },
              animate: {
                opacity: 1,
                x: "0"
              },
              exit: {
                opacity: 0,
                x: "100%"
              },
            }}>
              <Component {...pageProps} />
              </motion.div>
            </Page>
          </AnimatePresence>
        </Container>
      </>
    );
  }
}

export default MyApp;
