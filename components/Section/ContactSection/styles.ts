import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  secondaryAccentColor,
  primaryAccentColor,
} from '../../../styles/variables';

export const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  width: 100%;
`;

export const ContactTitle = styled(motion.h2)`
  color: ${primaryAccentColor};
  margin-bottom: 2rem;
`;

export const ContactDescription = styled(motion.h3)`
  font-weight: 400;
  color: ${secondaryAccentColor};
  text-align: center;
  line-height: 2rem;
  margin-bottom: 2rem;
`;
