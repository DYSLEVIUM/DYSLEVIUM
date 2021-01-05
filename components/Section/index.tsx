import React, { FunctionComponent } from 'react';
import styles from './Section.module.scss';

import { motion } from 'framer-motion';

interface section {
  children: any;
}

const Section: FunctionComponent<section> = (props) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 25 }}
      animate={{ opacity: 1, translateY: 0 }}
      className={styles.sectionContainer}
    >
      {props.children}
    </motion.section>
  );
};

export default Section;
