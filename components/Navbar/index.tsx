import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav className={styles.navContainer}>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>

      <div
        className={styles.hamburgerMenuContainer}
        onClick={() => {
          setshowMenu(!showMenu);
          document.body.style.overflow = 'hidden'; //  disabling scroll when menu is open
        }}
      >
        <div className={showMenu ? styles.close : styles.hamburgerMenu}></div>
      </div>

      <div
        className={styles.blurContainer}
        style={
          showMenu
            ? { backdropFilter: 'blur(15px)' }
            : { backdropFilter: 'blur(0px)' }
        }
      ></div>

      <div
        className={styles.listContainer}
        style={
          showMenu
            ? { transform: 'translateX(0)' }
            : { transform: 'translateX(100%)' }
        }
        onClick={() => setshowMenu(false)} //  closing navbar when the blurred container is clicked
      >
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
    </nav>
  );
}
