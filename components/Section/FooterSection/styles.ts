import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import {
	secondaryAccentColor,
	primaryAccentColor,
	sidePaddingMob,
	mobileSize,
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
	transition: all 250ms ease-in-out;
	&:hover {
		color: ${primaryAccentColor};
	}

	svg {
		transition: all 250ms ease-in-out;
		transform: scale(1.25);

		&:hover {
			transition: all 250ms ease-in-out;
			animation: ${bounce} 500ms ease-in-out infinite;
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
		transition: color 200ms ease-in-out;
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
