import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
// context
import DataContext from '@src/data/DataContext';
// Components
import LogoSite from '../LogoSite';
import MenuTop from '../MenuSide';
// Styles
import styles from '@src/styles/modules/Header.module.scss';

export default function Header({ pageName = "shouman.digital" }) {
  const { state } = useContext(DataContext);

  const [headerLocation, setHeaderLocation] = useState(state.location);

  useEffect(() => {
    setHeaderLocation(state.location);
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>{pageName}</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <header className={`${headerLocation} ${styles.header_circle}`}>
        <div className={styles.main_header}>
          <LogoSite
            logo="/images/logo-shouman-250.png"
            maxWidth="250px"
          />
          <MenuTop />
        </div>
        <div className={styles.bg_circle} />
      </header>
    </>
  );
}
