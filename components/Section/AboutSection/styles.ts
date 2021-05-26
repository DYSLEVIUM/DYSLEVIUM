import { motion } from 'framer-motion';
import styled from 'styled-components';
import { secondaryAccentColor } from '../../../styles/variables';

export const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  width: 100%;

  min-height: 100vh;
  color: ${secondaryAccentColor};
`;

export const AboutSpan = styled(motion.span)`
  font-size: 2rem;
`;
