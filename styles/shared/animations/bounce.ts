import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
