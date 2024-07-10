import React from 'react';
import Link from 'next/link';
// Styles
import styles from '@src/styles/modules/Menus.module.scss';

export default function MenuMain() {
  return (
    <nav className={styles.main_menu}>
      <ul>
        <li>
          <Link href="/webdev">
              <span>WebDev</span>
          </Link>
        </li>
        <li>
          <Link href="/design">
              <span>Design</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
              <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href="/contato">
              <span>Contato</span>
          </Link>

        </li>
      </ul>
    </nav>
  );
}
