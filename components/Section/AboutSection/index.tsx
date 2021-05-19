import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import SectionContainer from '../styles';
import { AboutContainer, AboutSpan } from './styles';

const AboutSection = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
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
    <SectionContainer id="about">
      <AboutContainer
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        <AboutSpan variants={listItem}>👷‍♂️</AboutSpan>
        Currently working on building this about section.
      </AboutContainer>
    </SectionContainer>
  );
};

export default AboutSection;
