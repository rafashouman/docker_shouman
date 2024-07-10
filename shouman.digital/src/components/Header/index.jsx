import React, { useState, useContext, useEffect } from 'react';
// context
import Head from 'next/head';
import DataContext from '@src//data/DataContext';

// Components
import LogoSite from '../LogoSite';
import MenuTop from '../MenuSide';

// Styles
import styles from '@src//styles/modules/Header.module.scss';

export default function Header() {
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
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <header className={`${headerLocation} ${styles.header}`}>
        <div className="position_logo">
          <LogoSite
            logo="/images/logo-site.png"
            maxWidth="250px"
          />
          {headerLocation !== 'home' && <MenuTop />}
        </div>
      </header>
    </>
  );
}
