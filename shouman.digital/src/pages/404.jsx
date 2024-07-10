import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
// Styles

export default function Custom404() {
  return (
    <HomeLayout>
      <div className="page-404">
        <div className="fullpage-box">
          <img src="/images/gifs/lugarerrado.gif" alt="logo-site" />
        </div>
        <h2>404 - Poutz, era esse mesmo o endereço?</h2>
      </div>
    </HomeLayout>
  );
}
