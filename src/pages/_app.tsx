// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div 
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 0.3
          }
        }
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;