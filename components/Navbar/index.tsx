import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { transform } from 'framer-motion';

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(true);
  const [showShadow, setshowShadow] = useState(false);

  const [showMenu, setshowMenu] = useState(false);

  let previousOffset;
  let currentOffset;

  const onScroll = () => {
    currentOffset = window.pageYOffset;

    if (previousOffset - currentOffset < 0) {
      setshowShadow(false);
      setshowNavbar(false);
    }

    if (previousOffset - currentOffset > 0) {
      setshowNavbar(true);
      setshowShadow(true);
    }

    if (showMenu) {
      setshowNavbar(true);
      setshowShadow(true);
    }

    previousOffset = currentOffset;

    if (currentOffset === 0) setshowShadow(false);
  };

  useEffect(() => {
    previousOffset = window.pageYOffset;
    currentOffset = window.pageYOffset;

    onScroll(); //  initial call on component load
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const showMenuOnClick = () => {
    setshowMenu(!showMenu);
    setshowNavbar(true);
    document.body.style.overflow = showMenu ? 'visible' : 'hidden'; //  disabling scroll when menu is open
  };

  const navContainerStyles: object = {
    ...(showMenu && { backdropFilter: 'none' }),
    ...(!showMenu && {
      backdropFilter: 'blur(10px) saturate(200%)',
      transform: 'translateZ(0)',
      willChange: 'transform',
    }),
    ...(showNavbar && {
      transform: 'translateY(0)',
      transition: 'all ease-in-out 0.25s',
    }),
    ...(!showNavbar &&
      !showMenu && {
        // backdropFilter: 'none',
        transform: 'translateY(-100%)',
        transition: 'all ease-in-out 0.25s',
      }),
    ...(showShadow && {
      boxShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
    }),
    ...(!showShadow && {
      // backgroundColor: '$contrastColor',
      backdropFilter: 'none',
      boxShadow: 'none',
      transition: 'all ease-in-out 0.25s',
    }),
  };

  return (
    <nav className={styles.navContainer} style={navContainerStyles}>
      <div>
        <a href="#intro">Logo</a>
      </div>

      <div
        className={styles.hamburgerMenuContainer}
        onClick={showMenuOnClick}
        style={
          showMenu
            ? { width: '1.5rem', height: '1.5rem' }
            : { width: '1.5rem', height: '1rem' }
        }
      >
        <div className={showMenu ? styles.close : styles.hamburgerMenu}></div>
      </div>

      <div
        className={styles.blurContainer}
        style={
          showMenu
            ? {
                backdropFilter: 'blur(10px) saturate(200%)',
                transform: 'translateZ(0)',
                willChange: 'transform',
              }
            : { backdropFilter: 'none', pointerEvents: 'none' }
        }
      ></div>

      <div className={styles.listContainer}>
        <ul
          className={styles.list}
          onClick={(e) => e.stopPropagation()}
          // stopping propagation of clickHandler to current and other children
        >
          <li className={styles.listItem}>
            <a href="#about">About</a>
          </li>
          <li className={styles.listItem}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.listItem}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>

      <div
        className={styles.listContainerAside}
        style={
          showMenu
            ? { transform: 'translateX(0)' }
            : { transform: 'translateX(100%)' }
        }
        onClick={showMenuOnClick} //  closing navbar when the blurred container is clicked
      >
        <ul
          className={styles.listAside}
          onClick={(e) => e.stopPropagation()}
          // stopping propagation of clickHandler to current and other children
        >
          <li className={styles.listItemAside}>
            <a href="#about">About</a>
          </li>
          <li className={styles.listItemAside}>
            <a href="#contact">Contact</a>
          </li>
          <li className={styles.listItemAside}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
