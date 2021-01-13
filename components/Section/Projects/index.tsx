import React, { useEffect } from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './ProjectsSection.module.scss';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ProjectsSection = () => {
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
    <div id="projects" className={sectionStyles.sectionContainer}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        Currently working on building this project section.
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
