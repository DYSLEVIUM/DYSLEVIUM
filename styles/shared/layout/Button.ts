import styled from 'styled-components';
import { motion } from 'framer-motion';

import { primaryAccentColor, contrastColor } from '../../variables';

export const PrimaryButton = styled(motion.button)`
	background-color: ${contrastColor};
	color: ${primaryAccentColor};

	width: fit-content;

	cursor: pointer;

	border: 1px solid ${primaryAccentColor};
	padding: 0.75rem 1.5rem;
	transition: all 350ms ease-in-out;

	font-weight: 700;
	&:hover {
		background-color: ${primaryAccentColor};
		color: ${contrastColor};
		box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.4);
		transition: all 350ms ease-in-out;

		a {
			color: ${contrastColor};
		}
	}
`;

export const SecondaryButton = styled(motion.button)`
	background-color: ${primaryAccentColor};
	color: ${contrastColor};

	box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.4);

	width: fit-content;

	cursor: pointer;

	border: 1px solid ${primaryAccentColor};
	padding: 0.75rem 1.5rem;

	font-weight: 700;
	transition: all 350ms ease-in-out;

	&:hover {
		background-color: transparent;
		color: ${primaryAccentColor};
		transition: all 350ms ease-in-out;

		box-shadow: none;
		a {
			color: ${primaryAccentColor};
		}
	}
`;
