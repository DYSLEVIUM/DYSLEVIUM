import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import {
  sidePaddingMob,
  mobileSize,
  secondaryFontColor,
  primaryFontColor,
  primaryAccentColor,
  contrastColor,
} from '../../styles/variables';

export const NavContainer = styled.nav`
  position: fixed;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${sidePaddingMob};

  font-family: 'Montserrat';
  font-weight: bold;

  width: 100%;

  z-index: 1;
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.menu
      ? css`
          backdrop-filter: none;
        `
      : css`
          backdrop-filter: blur(10px);
          transform: translateZ(0);
          will-change: transform;
        `}

  ${(props) => () => {
    let style;

    if (props.navbar) {
      style = css`
        transform: translateY(0);
      `;
    } else if (!props.menu) {
      style = css`
        transform: translateY(-100%);
      `;
    } else {
      style = css``;
    }

    return style;
  }}

	${(props) =>
    props.shadow
      ? css`
          box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
          background-color: rgba(28, 31, 34, 0.85);
        `
      : css`
          background-color: transparent;
          backdrop-filter: none;
          box-shadow: none;
          transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s;
        `}
`;

export const HamburgerMenuContainer = styled.div`
  position: fixed;
  right: ${sidePaddingMob};

  align-items: center;
  z-index: 2;

  cursor: pointer;

  display: none;

  transform: rotateY(180deg);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  ${(props) =>
    props.isHidden
      ? css`
          width: 1.5rem;
          height: 1.5rem;
        `
      : css`
          width: 1.5rem;
          height: 1rem;
        `}
`;

export const HamburgerMenu = styled.div`
  ${(props) =>
    props.isHidden
      ? css`
          display: none;

          @media only screen and (max-width: ${mobileSize}) {
            display: block;
            width: 65%;
            height: 8%;
            background-color: transparent;

            border-radius: 1000px;

            &::before,
            &::after {
              content: '';
              position: absolute;
              width: calc(100% * 1.414);
              height: inherit;

              background-color: ${secondaryFontColor};

              border-radius: 1000px;
              transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            &::before {
              bottom: 0;
              transform-origin: 0% 50%;
              transform: rotateZ(-45deg) translateY(20%) translateX(-2%);
            }

            &::after {
              top: 0;
              transform-origin: 0% 50%;
              transform: rotateZ(45deg) translateY(-20%) translateX(-2.5%);
            }
          }
        `
      : css`
          opacity: 0;
          @media only screen and (max-width: ${mobileSize}) {
            width: 65%;
            height: 10%;

            background-color: ${secondaryFontColor};
            border-radius: 1000px;
            opacity: 1;

            &::before,
            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: inherit;

              background-color: inherit;
              border-radius: 1000px;
              transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            &::before {
              bottom: 0;
            }

            &::after {
              top: 0;
            }
          }
        `}
`;

export const BlurContainer = styled.section`
  position: fixed;
  display: none;

  @media only screen and (max-width: ${mobileSize}) {
    display: block;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.25s;
  }

  ${(props) =>
    props.isHidden
      ? css`
          backdrop-filter: blur(10px);
          transform: translateZ(0px);
          will-change: transform;
        `
      : css`
          backdrop-filter: none;
          pointer-events: none;
        `}
`;

export const ListContainer = styled.div`
  display: block;

  @media only screen and (max-width: ${mobileSize}) {
    display: none;
  }
`;

export const ListContainerAside = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  @media only screen and (max-width: ${mobileSize}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    transform: translateX(100%);

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  ${(props) =>
    props.isHidden
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  list-style: none;
  counter-reset: item -1;
`;

export const ListItem = styled(motion.li)`
  margin-left: calc(${sidePaddingMob} * 2);

  font-size: 0.9rem;

  font-weight: 500;
  color: ${primaryFontColor};

  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  a {
    position: relative;
    width: fit-content;
    padding-bottom: 0.2rem;

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
  }

  a::before {
    content: counter(item) '. ';
    counter-increment: item;
    display: inline-block;
    margin-right: 0.25rem;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${primaryAccentColor};
  }

  &:last-child {
    a {
      &::before {
        content: none;
        margin-right: 0;
      }

      &::after {
        content: none;
      }
    }
  }
`;
export const ListAside = styled(motion.ul)`
  background-color: ${contrastColor};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);

  list-style: none;

  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  height: 100%;
  width: 60%;

  counter-reset: item -1;
`;

export const ListItemAside = styled(motion.li)`
  padding: 0.5rem 2rem;
  margin: 1rem;

  font-size: 0.9rem;
  font-weight: 500;

  color: ${primaryFontColor};

  transition: color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${primaryAccentColor};
  }

  a::before {
    content: counter(item) '. ';
    margin: 0 0.5rem;
    counter-increment: item;
    letter-spacing: 0.1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${primaryAccentColor};
  }

  &:last-child {
    a {
      &::before {
        content: none;
        margin-right: 0;
      }
    }
  }
`;
