import React from 'react';
import styles from './style.module.scss';

const Img = ({ img }) => <img className={styles['gallery-polaroid-unique']} src={img} alt="img" />;

export default function GalleryPolaroid({ picsumArr }) {
  return (
    <div className={styles['gallery-polaroid']}>
      {picsumArr && picsumArr.map((img) => <div className={styles['gallery-polaroid-box']}><Img key={img.id} img={img.download_url} /></div>)}
    </div>
  );
}
