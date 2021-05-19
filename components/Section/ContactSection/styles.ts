import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  secondaryAccentColor,
  primaryAccentColor,
} from '../../../styles/variables';

export const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 2rem 0;
`;

export const ContactTitle = styled(motion.h2)`
  color: ${primaryAccentColor};
`;

export const ContactDescription = styled(motion.h3)`
  font-weight: normal;
  color: ${secondaryAccentColor};
  text-align: center;
  margin: 1rem 0;
  line-height: 2rem;
`;
