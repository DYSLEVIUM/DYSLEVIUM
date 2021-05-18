import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import {
	secondaryAccentColor,
	primaryAccentColor,
	primaryColor,
	secondaryColor,
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

	@media only screen and (max-width: ${mobileSize}) {
		display: flex;
		flex-direction: column;
	}

	width: 100%;
	height: 100%;
`;

//  moving slider was working weird so added a wrapper cheat 😅
export const TabListWrapper = styled.div`
	@media only screen and (max-width: ${mobileSize}) {
		width: 100%;
		overflow-x: auto;
	}
`;

export const TabList = styled(motion.div)`
	margin-right: 1rem;
	position: relative;
	border-left: 0.2rem solid ${secondaryColor};

	span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}

	@media only screen and (max-width: ${mobileSize}) {
		display: flex;
		flex-direction: row;
		width: fit-content;
		border-left: none;
		overflow-x: auto;
		mask-right: 0;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;

const tabHeight = 3 + 'rem';
const tabWidth = 12 + 'rem';

export const TabButton = styled(motion.div)`
	cursor: pointer;
	height: ${tabHeight};
	padding: 0 1rem;

	transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);

	&:hover {
		/* color: ${primaryAccentColor}; */
		background-color: ${secondaryAccentColor + '10'};
	}

	@media only screen and (max-width: ${mobileSize}) {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.5rem;
		min-width: ${tabWidth};
	}

	${(props) =>
		props.isActive
			? css`
					color: ${primaryAccentColor};
					/* background-color: ${secondaryAccentColor + '10'}; */
			  `
			: css``};
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

	transform: translateY(
		calc(${(props) => props.activeTabIndex} * ${tabHeight})
	);

	@media only screen and (max-width: ${mobileSize}) {
		height: 0.2rem;
		width: ${tabWidth};
		top: ${tabHeight};
		left: 0;
		transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
		transform: translateX(calc(${(props) => props.activeTabIndex} * 100%));
	}
`;

export const TabPanelsList = styled(motion.div)`
	@media only screen and (min-width: ${mobileSize}) {
		width: 30rem;
	}

	@media only screen and (max-width: ${mobileSize}) {
		margin-top: 0.5rem;
	}
`;

export const TabPanel = styled(motion.div)``;

export const PositionContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	font-weight: 500;
	font-size: 1.5rem;

	@media only screen and (max-width: ${mobileSize}) {
		min-height: 4rem;
	}
`;

export const Position = styled.h3`
	margin-right: 0.5rem;
`;

export const Delimiter = styled.h4`
	margin-right: 0.5rem;
	color: ${primaryAccentColor};
`;

export const Organization = styled.h3`
	position: relative;
	color: ${primaryAccentColor};

	&:hover {
		color: ${primaryAccentColor};

		&::after {
			transform-origin: left;

			transform: scaleX(1);
		}
	}
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: ${primaryAccentColor};

		transform: scaleX(0);
		transform-origin: right;

		transition: transform 250ms 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
	}
`;

export const WorkDuration = styled(motion.div)`
	margin-bottom: 1rem;

	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const StartDate = styled.h5`
	margin-right: 1rem;
`;

export const EndDate = styled.h5`
	margin-left: 1rem;
`;

export const WorkDetailsList = styled(motion.ul)`
	position: relative;
`;

export const WorkDetailsListItem = styled(motion.li)`
	padding-left: 2rem;
	margin-bottom: 1rem;
	&::before {
		content: '•';
		position: absolute;
		left: 0;
		color: ${primaryAccentColor};
		/* background-color: ${primaryAccentColor}; */
	}
`;
