import styled, { keyframes } from 'styled-components';

export const animate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
`;

export const ProgressBarContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  height: 0.2rem;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: ${animate} 3s linear infinite;
  border-radius: 1rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(15px);
  }

  &::after {
    filter: blur(30px);
  }
`;
