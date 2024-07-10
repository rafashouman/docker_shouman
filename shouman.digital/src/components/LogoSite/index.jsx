import React from 'react';
import Link from 'next/link';
// Styles
import styles from '@src/styles/modules/Logo.module.scss';

export default function LogoSite({ logo, maxWidth }) {
  const logoSize = {
    maxWidth,
  };

  return (
    <Link href="/" passHref>
      <h1><img style={logoSize} className={`${styles.logo} logo-default`} src={logo} alt="shouman.xyz" /></h1>
    </Link>
  );
}
