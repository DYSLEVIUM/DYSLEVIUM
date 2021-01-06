import React from 'react';
import sectionStyles from '../Section.module.scss';
import styles from './FooterSection.module.scss';

import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <div id="about" className={sectionStyles.sectionContainer}>
      <motion.div
        initial={{ opacity: 0, translateY: 25 }}
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.introductionContainer}
      >
        Footer
      </motion.div>
    </div>
  );
};

export default FooterSection;
