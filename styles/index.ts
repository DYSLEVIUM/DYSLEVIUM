import { createGlobalStyle } from 'styled-components';
import styled, { css } from 'styled-components';
import {
	hamburgerColor,
	contrastColor,
	mobileSize,
	primaryColor,
	secondaryColor,
	primaryAccentColor,
} from './variables';

export const GlobalStyles = createGlobalStyle`
* {
	padding: 0;
	margin: 0;

	outline: none;
	box-sizing: border-box;
}

html,
body {
	font-size: 16px;

	font-family: 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	scroll-behavior: smooth;

	color: ${hamburgerColor};

	background-color: ${contrastColor};

	scrollbar-color: ${primaryColor} ${secondaryColor};
}

ul {
	list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	padding: 1rem 0;
	@media only screen and (max-width: ${mobileSize}) {
		padding: 0.5rem 0;
	}
}

h1 {
	font-size: 4rem;
	line-height: 4rem;

	@media only screen and (max-width: ${mobileSize}) {
		font-size: 2.5rem;
	}
}

h2 {
	font-size: 2rem;
	line-height: 2rem;

	@media only screen and (max-width: ${mobileSize}) {
		font-size: 1.65rem;
	}
}

h3 {
	font-size: 1.35rem;
	line-height: 1.5rem;

	@media only screen and (max-width: ${mobileSize}) {
		font-size: 1.13rem;
	}
}

h4 {
	font-size: 1rem;
	line-height: 1.5rem;

	@media only screen and (max-width: ${mobileSize}) {
		font-size: 0.95rem;
	}
}

a {
	color: inherit;
	text-decoration: none;
	cursor: pointer;
}

*::-webkit-scrollbar {
	width: 0.75rem;

	@media only screen and (max-width: ${mobileSize}) {
		display: none;
	}
}

*::-webkit-scrollbar-track {
	border-radius: 1rem;
	background-color: ${secondaryColor};
}

*::-webkit-scrollbar-thumb {
	border-radius: 1rem;
	background-color: ${primaryColor};

	&:hover {
		background-color: ${primaryAccentColor};
	}
}
`;

export const MainContainer = styled.main`
	${(props) =>
		props.isBlur
			? css`
					filter: blur(10px);
					transition: all 250ms ease-in-out;
			  `
			: css`
					transition: all 250ms ease-in-out;
			  `}
`;
