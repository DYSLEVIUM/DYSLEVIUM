import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './IntroductionSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { email } from '../../../utils/constants';

const IntroductionSection = () => {
  const animation = useAnimation();
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    delay: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const container = {
    hidden: { opacity: 0, translateY: 15 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25 * 4,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, translateY: 15 },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <div id="intro" className={sectionStyles.sectionContainer}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
        className={styles.introductionContainer}
      >
        <motion.span className={styles.salutationSpan}>
          <motion.img
            src="/wavingHand.gif"
            alt="Hello GIF"
            width="3rem"
            height="3rem"
            className={styles.helloImg}
            variants={listItem}
          />
          <motion.h4 className={styles.salutation} variants={listItem}>
            Hi, my name is
          </motion.h4>
        </motion.span>

        <motion.h1 variants={listItem} className={styles.name}>
          Pushpakant Behera.
        </motion.h1>
        <motion.h2 variants={listItem} className={styles.carrerObjective}>
          I love to build things
        </motion.h2>
        <motion.h3 variants={listItem} className={styles.shortIntro}>
          I am a sophomore at National Institute of Technology Jamshedpur, and
          have an avid passion for Software Engineering.
        </motion.h3>

        <motion.button variants={listItem} className={styles.contactBtn}>
          <a href={`mailto:${email}`} target="_blank">
            Contact Me
          </a>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
