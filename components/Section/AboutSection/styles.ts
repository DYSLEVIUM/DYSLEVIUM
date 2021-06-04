import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  primaryAccentColor,
  secondaryAccentColor,
  mobileSize,
} from '../../../styles/variables';

export const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  width: 100%;

  min-height: 100vh;
  color: ${secondaryAccentColor};
`;

export const SectionTitle = styled(motion.h1)`
  color: ${primaryAccentColor};
  margin-bottom: 6rem;

  @media only screen and (max-width: ${mobileSize}) {
    margin-bottom: 2rem;
  }
`;

export const SectionContent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: ${mobileSize}) {
    flex-direction: column;
    justify-content: center;
  }

  font-weight: 400;

  max-width: 700px;
  line-height: 2rem;
`;

export const AboutContent = styled(motion.div)`
  margin-bottom: 2rem;
`;

export const TechnologyStackContainer = styled(motion.div)`
  @media only screen and (max-width: ${mobileSize}) {
    margin-bottom: 2rem;
  }
`;

export const TechnologyStackPara = styled(motion.h4)`
  margin-bottom: 1rem;
`;

export const TechnologyStackList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 5rem;

  margin-bottom: 4rem;
`;

export const TechnologyStackListItem = styled(motion.li)`
  position: relative;

  padding-left: 1rem;

  margin-bottom: 0.25rem;

  min-width: fit-content;
  &::before {
    position: absolute;
    content: '•';
    left: 0;
    color: ${primaryAccentColor};
  }
`;

export const ProfileImageContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 4rem;
  border-radius: 5px;

  @media only screen and (max-width: ${mobileSize}) {
    margin: 0;
  }

  div {
    border-radius: 5px;
  }
`;
