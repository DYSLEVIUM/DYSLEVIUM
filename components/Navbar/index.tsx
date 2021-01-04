import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [showNavbar, setshowNavbar] = useState(true);
  const [showShadow, setshowShadow] = useState(false);

  const [showMenu, setshowMenu] = useState(false);

  let previousOffset;
  let currentOffset;

  const onScroll = () => {
    setshowShadow(true);

    currentOffset = window.pageYOffset;

    if (previousOffset - currentOffset < 0) {
      setshowShadow(false);
      setshowNavbar(false);
    }

    if (previousOffset - currentOffset > 0) {
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
    document.body.style.overflow = showMenu ? 'visible' : 'hidden'; //  disabling scroll when menu is open
  };

  const navContainerStyles: object = {
    ...(showMenu && { backdropFilter: 'none' }),
    ...(!showMenu && { backdropFilter: 'blur(20px) saturate(180%)' }),
    ...(showNavbar && {
      transform: 'translateY(0)',
      transition: 'transform ease-in-out 0.25s',
    }),
    ...(!showNavbar && {
      backdropFilter: 'none',
      transform: 'translateY(-100%)',
      transition: 'transform ease-in-out 0.25s',
    }),
    ...(showShadow && {
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
    }),
    ...(!showShadow && {
      boxShadow: 'none',
    }),
  };

  return (
    <nav className={styles.navContainer} style={navContainerStyles}>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
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
            ? { backdropFilter: 'blur(20px) saturate(180%)' }
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
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">
              <a>Projects</a>
            </Link>
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
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.listItemAside}>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.listItemAside}>
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
