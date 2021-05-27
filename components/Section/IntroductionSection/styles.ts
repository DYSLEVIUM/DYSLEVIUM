import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  primaryAccentColor,
  secondaryFontColor,
  primaryFontColor,
} from '../../../styles/variables';

export const IntroductionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;
  padding: 2rem 0;
`;

export const SalutationSpan = styled(motion.span)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HelloImage = styled(motion.div)`
  display: inline;
  filter: saturate(200%);
  margin-right: 1rem;
`;

export const Salutation = styled(motion.h4)`
  color: ${secondaryFontColor};
  font-weight: 500;
`;

export const Name = styled(motion.h1)`
  color: ${primaryAccentColor};
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const CareerObjective = styled(motion.h2)`
  color: ${secondaryFontColor};
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const ShortIntro = styled(motion.h3)`
  color: ${primaryFontColor};
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContactButtonContainer = styled.div`
  margin-right: 1rem;
`;
export const ResumeButtonContainer = styled.div`
  margin-left: 1rem;
`;
