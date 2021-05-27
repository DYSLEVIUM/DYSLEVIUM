import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';

import SectionContainer from '../styles';
import {
  AboutContainer,
  SectionIntro,
  SectionTitle,
  SectionContent,
  ProfileImageContainer,
  AboutContentContainer,
  AboutContent,
  TechnologyStackContainer,
} from './styles';

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
        <SectionIntro>
          <SectionTitle variants={listItem}>About Me</SectionTitle>
        </SectionIntro>
        <SectionContent>
          <AboutContentContainer>
            <AboutContent variants={listItem}>
              <h4>
                Hello! My name is Pushpakant and I enjoy creating things that
                run on the web.
              </h4>
            </AboutContent>

            <TechnologyStackContainer variants={listItem}>
              <h4>
                Here are a few technologies I've been working with recently:
              </h4>

              <ul>
                <li>C++</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>Typescript</li>
                <li>Angular</li>
              </ul>
            </TechnologyStackContainer>
          </AboutContentContainer>
          <ProfileImageContainer variants={listItem}>
            <Image
              src="/profile.png"
              alt="Hello GIF"
              width={300}
              height={300}
              layout="intrinsic"
              quality={10}
            />
          </ProfileImageContainer>
        </SectionContent>
      </AboutContainer>
    </SectionContainer>
  );
};

export default AboutSection;
