import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.list}>
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
