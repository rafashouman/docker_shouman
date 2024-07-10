import React, { useState, useEffect } from 'react';
import { getPicsumImages } from '@src/lib/api';
// layouts
import HomeLayout from '@src/layouts/HomeLayout';
import GalleryPolaroid from '@src/components/GalleryPolaroid';

export default function DesignPage() {
  const [picsumArr, setPicsumArr] = useState([]);

  async function getImage() {
    const randomNumber = Math.floor(Math.random() * (99 + 1));
    const tempArr = await getPicsumImages(randomNumber);
    setPicsumArr(tempArr);
  }

  useEffect(() => {
    getImage();
  }, []);
  return (
    <HomeLayout>
      <h2 className='Center--Title'>Página em contrução</h2>
      <GalleryPolaroid picsumArr={picsumArr} />
    </HomeLayout>
  );
}
