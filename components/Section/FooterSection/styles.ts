import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

import {
  secondaryAccentColor,
  primaryAccentColor,
  mobileSize,
  primaryFontColor,
  secondaryColor,
} from '../../../styles/variables';

const bounce = keyframes`
  0%,
  100% {
    transform: scale(1.25) translateY(0);
  }
  50% {
    transform: scale(1.25) translateY(-10px);
  }
`;

export const FooterContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 0;

  color: ${secondaryAccentColor};

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterDetailsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  min-height: 250px;
  max-width: 400px;
  width: 60%;

  padding-right: 2rem;

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    min-height: 0px;
    padding-right: 0;
  }
`;

export const SocialLinksContainer = styled(motion.div)`
  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const SocialLinksTitle = styled(motion.h1)`
  margin-bottom: 4rem;

  color: ${primaryAccentColor};

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 3rem;
  }
`;

export const SocialLinks = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 4rem;

  @media only screen and (max-width: ${mobileSize}) {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const StyledSocialLink = styled(motion.a)`
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: ${primaryAccentColor};
  }

  svg {
    transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: scale(1.25);

    &:hover {
      transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
      animation: ${bounce} 500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    }
  }
`;

export const StyledEndMarkContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 100%;
`;

export const StyledNameContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  margin-bottom: 0.5rem;

  h3 {
    font-weight: 500;
    color: ${primaryAccentColor};
  }
`;

export const StyledSalutation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  h5 {
    font-weight: 400;
    color: ${primaryFontColor};

    span {
      color: ${primaryAccentColor};
    }
  }

  @media only screen and (max-width: ${mobileSize}) {
    margin-bottom: 2rem;
  }
`;

export const ResumeQRCode = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 4rem;
  border-left: 1px solid ${secondaryColor};

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: color 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: ${primaryAccentColor};
    }
  }

  span {
    font-weight: 500;
  }

  @media only screen and (max-width: ${mobileSize}) {
    padding-left: 0;
    border: none;
  }
`;
