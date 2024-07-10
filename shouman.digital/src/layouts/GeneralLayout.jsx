import React from 'react';
import HeaderCircle from '../components/HeaderCircle';
import Footer from '../components/Footer';

export default function GeneralLayout({ children }) {
  return (
    <>
      <HeaderCircle />
      <main className="main-content">
        <div className="full-img">
          {children}
        </div>
      </main>
      <Footer />

    </>
  );
}
