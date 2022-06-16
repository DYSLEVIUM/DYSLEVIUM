import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faReddit,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  githubProfile,
  instagramProfile,
  linkedInProfile,
  redditProfile,
  resumeUrl,
  twitterProfile,
} from '../../../utils/constants';
import SectionContainer from '../styles';
import {
  FooterContainer,
  FooterDetailsWrapper,
  SocialLinksTitle,
  SocialLinks,
  StyledSocialLink,
  ResumeQRCode,
  StyledNameContainer,
  StyledSalutation,
  StyledEndMarkContainer,
  SocialLinksContainer,
} from './styles';
// eslint-disable-next-line import/named
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const FooterSection = () => {
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
    <SectionContainer id="footer">
      <FooterContainer
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        <FooterDetailsWrapper>
          <SocialLinksContainer>
            <SocialLinksTitle variants={listItem}>Find me at</SocialLinksTitle>
            <SocialLinks>
              <motion.li variants={listItem}>
                <StyledSocialLink
                  href={githubProfile}
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub as IconProp} />
                </StyledSocialLink>
              </motion.li>
              <motion.li variants={listItem}>
                <StyledSocialLink
                  href={linkedInProfile}
                  target="_blank"
                  title="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin as IconProp} />
                </StyledSocialLink>
              </motion.li>
              <motion.li variants={listItem}>
                <StyledSocialLink
                  href={instagramProfile}
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram as IconProp} />
                </StyledSocialLink>
              </motion.li>
              <motion.li variants={listItem}>
                <StyledSocialLink
                  href={twitterProfile}
                  target="_blank"
                  title="Twitter"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter as IconProp} />
                </StyledSocialLink>
              </motion.li>
              <motion.li variants={listItem}>
                <StyledSocialLink
                  href={redditProfile}
                  target="_blank"
                  title="Reddit"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faReddit as IconProp} />
                </StyledSocialLink>
              </motion.li>
            </SocialLinks>
          </SocialLinksContainer>

          <StyledEndMarkContainer>
            <StyledNameContainer variants={listItem}>
              <h3>Pushpakant Behera</h3>
            </StyledNameContainer>
            <StyledSalutation variants={listItem}>
              <h5>
                Made with <span>❤</span> in NextJs
              </h5>
            </StyledSalutation>
          </StyledEndMarkContainer>
        </FooterDetailsWrapper>
        <ResumeQRCode>
          <motion.span variants={listItem}>
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <Image
                src="/resume.svg"
                alt="Résumé"
                width="250px"
                height="250px"
                layout="intrinsic"
                quality="100"
                loading="lazy"
              />
              <motion.span title="Résumé">Résumé</motion.span>
            </a>
          </motion.span>
        </ResumeQRCode>
      </FooterContainer>
    </SectionContainer>
  );
};

export default FooterSection;
