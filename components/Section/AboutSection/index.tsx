import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';

import profilePic from '../../../public/profile.png';

import SectionContainer from '../styles';
import {
  AboutContainer,
  SectionTitle,
  SectionContent,
  ProfileImageContainer,
  AboutContent,
  TechnologyStackContainer,
  TechnologyStackList,
  TechnologyStackListItem,
  TechnologyStackPara,
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
        <div>
          <SectionTitle variants={listItem}>
            <a href="#about">About Me</a>
          </SectionTitle>
        </div>
        <SectionContent>
          <div>
            <AboutContent variants={listItem}>
              <h4>
                I enjoy solving deep systems problems and building production
                software that is fast, reliable, and scalable.
              </h4>
            </AboutContent>

            <TechnologyStackContainer variants={listItem}>
              <TechnologyStackPara>
                Here are a few technologies I&apos;ve been working with
                recently:
              </TechnologyStackPara>

              <TechnologyStackList>
                <TechnologyStackListItem>C/C++</TechnologyStackListItem>
                <TechnologyStackListItem>Go</TechnologyStackListItem>
                <TechnologyStackListItem>TypeScript</TechnologyStackListItem>
                <TechnologyStackListItem>WebRTC</TechnologyStackListItem>
                <TechnologyStackListItem>gRPC</TechnologyStackListItem>
                <TechnologyStackListItem>Kubernetes</TechnologyStackListItem>
              </TechnologyStackList>
            </TechnologyStackContainer>
          </div>
          <ProfileImageContainer variants={listItem}>
            <Image
              src={profilePic}
              alt="Profile Pic"
              width={300}
              height={300}
              placeholder="blur"
            />
          </ProfileImageContainer>
        </SectionContent>
      </AboutContainer>
    </SectionContainer>
  );
};

export default AboutSection;
