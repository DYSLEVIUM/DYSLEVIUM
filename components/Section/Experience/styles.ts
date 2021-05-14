import { motion } from 'framer-motion';
import styled from 'styled-components';
import { secondaryAccentColor } from '../../../styles/variables';

export const ExperienceContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;

	min-height: 100vh;
	color: ${secondaryAccentColor};
`;
