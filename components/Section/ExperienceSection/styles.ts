import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import {
	secondaryAccentColor,
	primaryAccentColor,
	primaryColor,
	secondaryColor,
	monitorSize,
	mobileSize,
} from '../../../styles/variables';

export const ExperienceContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;

	min-height: 100vh;
	color: ${secondaryAccentColor};
`;

export const SectionIntro = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
`;

export const SectionTitle = styled(motion.h2)`
	color: ${primaryAccentColor};
	letter-spacing: 0.05rem;
`;

export const ExperienceListContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
`;

export const ExperienceListContainerWrapper = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
`;

export const TabList = styled(motion.div)`
	position: relative;
	border-left: 0.2rem solid ${secondaryColor};

	span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}
`;

const tabHeight = 3 + 'rem';

export const TabButton = styled(motion.div)`
	cursor: pointer;
	height: ${tabHeight};
	padding: 0 1rem;

	@media only screen and (min-width: ${mobileSize}) {
		padding: 0 4rem 0 1rem;
	}
`;

export const TabHighlight = styled(motion.div)`
	position: absolute;
	top: 0;
	left: -0.25rem;
	width: 0.3rem;
	border-radius: 500px;
	height: ${tabHeight};
	background-color: ${primaryColor};

	transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
	${(props) =>
		props.activeTabIndex
			? css`
					transform: translateY(calc(${props.activeTabIndex} * ${tabHeight}));
			  `
			: css``}
`;

export const TabPanelsList = styled(motion.div)`
	width: 30rem;
`;

export const TabPanel = styled(motion.div)`
	padding: 1rem;
`;
