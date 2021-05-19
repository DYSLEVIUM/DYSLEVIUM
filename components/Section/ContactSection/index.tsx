import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { email } from '../../../utils/constants';
import SectionContainer from '../styles';
import { ContactContainer, ContactDescription, ContactTitle } from './styles';
import { PrimaryButton } from '../../../styles/shared/layout/Button';

const ContactSection = () => {
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
    <SectionContainer id="contact">
      <ContactContainer
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        <ContactTitle variants={listItem}>Get in Touch</ContactTitle>
        <ContactDescription variants={listItem}>
          Whether you have a question or just want to say hi, my inbox is always
          open. I&apos;ll try my best to get back to you!
        </ContactDescription>
        <PrimaryButton variants={listItem}>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            Get in Touch
          </a>
        </PrimaryButton>
      </ContactContainer>
    </SectionContainer>
  );
};

export default ContactSection;
