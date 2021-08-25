import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import {
  PrimaryButton,
  SecondaryButton,
} from '../../../styles/shared/layout/Button';
import { email, resumeUrl } from '../../../utils/constants';
import SectionContainer from '../styles';

import {
  IntroductionContainer,
  SalutationSpan,
  HelloImage,
  Salutation,
  Name,
  CareerObjective,
  ShortIntro,
  ButtonContainer,
  ContactButtonContainer,
  ResumeButtonContainer,
} from './styles';

const IntroductionSection = () => {
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
    <SectionContainer id="intro">
      <IntroductionContainer
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        <SalutationSpan>
          <HelloImage variants={listItem}>
            <Image
              src="/wavingHand.gif"
              alt="Hello GIF"
              width={50}
              height={50}
              layout="intrinsic"
              quality={10}
            />
          </HelloImage>
          <Salutation variants={listItem}>Hi, my name is</Salutation>
        </SalutationSpan>

        <Name variants={listItem}>Pushpakant Behera.</Name>
        <CareerObjective variants={listItem}>
          I love to solve problems and build things
        </CareerObjective>
        <ShortIntro variants={listItem}>
          I am a junior at National Institute of Technology Jamshedpur, and
          have an avid passion for Software Engineering.
        </ShortIntro>

        <ButtonContainer>
          <ContactButtonContainer>
            <SecondaryButton variants={listItem}>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </SecondaryButton>
          </ContactButtonContainer>

          <ResumeButtonContainer>
            <PrimaryButton variants={listItem}>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Get Résumé
              </a>
            </PrimaryButton>
          </ResumeButtonContainer>
        </ButtonContainer>
      </IntroductionContainer>
    </SectionContainer>
  );
};

export default IntroductionSection;
