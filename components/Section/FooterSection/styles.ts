import { motion } from 'framer-motion';
import styled from 'styled-components';

import bounce from '../../../styles/shared/animations/bounce';
import {
  secondaryAccentColor,
  primaryAccentColor,
  sidePaddingMob,
  mobileSize,
} from '../../../styles/variables';

export const FooterContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  padding: 2rem 0;

  color: ${secondaryAccentColor};

  @media only screen and (max-width: ${mobileSize}) {
    padding-top: calc(3 * ${sidePaddingMob});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialLinksContainer = styled(motion.div)`
  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0rem;
  }

  max-width: 400px;

  width: 60%;
`;

export const SocialLinksTitle = styled(motion.h3)`
  width: 100%;
  margin-bottom: 1rem;
  font-weight: normal;

  color: ${primaryAccentColor};

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialLinks = styled(motion.ul)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: ${mobileSize}) {
    margin: 0;
    width: 100%;
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

export const ResumeQRCode = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 4rem;
  min-height: 250px;
  border-left: 1px solid $secondaryColor;

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

  @media only screen and (max-width: ${mobileSize}) {
    padding-left: 0;
    margin-top: 2rem;
    border: none;
  }
`;
