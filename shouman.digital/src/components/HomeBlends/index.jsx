import React, { useState, useEffect } from 'react';
import { getStrapi, isMobile } from '@src/lib/api';

export default function HomeBlends({ mainClass, id = null, urlEnv }) {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [bgColor, setBgColor] = useState('#f0f0f0');
  const [bg1Visible, setBg1Visible] = useState(true);
  const [bg2Visible, setBg2Visible] = useState(true);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  /* cria uma url para requisitar uma imagem da API lorem picsum */
  function makeUrl() {
    const startUrl = 'https://picsum.photos/';
    const randomNumber = Math.floor(Math.random() * (999 + 1));
    let finalUrl = '';
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // eslint-disable-next-line no-unused-expressions
    id ? finalUrl = `${startUrl}id/${id}/${width}/${height}` : finalUrl = `${startUrl}${width}/${height}?random=${randomNumber}`;

    return finalUrl;
  }

  /* reseta a página */
  function resetStyle() {
    setBg1Visible(true);
    setBg2Visible(true);
    setBgColor('#f0f0f0');
  }
  function getRandomInt(min, max) {
    const tempMin = Math.ceil(min);
    const temMax = Math.floor(max);
    return Math.floor(Math.random() * (temMax - tempMin)) + tempMin;
  }
  function selectImg(images) {
    if (images) {
      const maxRandom = images.length - 1;
      const minRandom = 0;
      const imgIndex = getRandomInt(minRandom, maxRandom);
      return images[imgIndex].url;
    }
    return false;
  }
  /* requisição para pegar as imagens no strapi(backend) */
  async function getStrapiImgs(urlStrapi) {
    let strapiObj;
    let uniqueImg;
    const url = 'https://wp.shouman.xyz';

    const isMobileNow = await isMobile();

    // eslint-disable-next-line no-unused-expressions
    isMobileNow ? strapiObj = await getStrapi(2, urlStrapi)
      : strapiObj = await getStrapi(1, urlStrapi);

    if (strapiObj) {
      uniqueImg = selectImg(strapiObj.images);
    } else {
      return setImg2(makeUrl());
    }
    console.log('strapiObj', strapiObj);
    return setImg2(url + uniqueImg);
  }

  useEffect(() => {
    setImg1(makeUrl());
    // setImg2(makeUrl());
    getStrapiImgs(urlEnv);
  }, [width, height]);

  return (
    <>
      <div className="buttons-wrapper">
        <button
          type="button"
          style={{ backgroundColor: bgColor }}
          onClick={() => setBg1Visible(!bg1Visible)}
        >
          BG1
          {!bg1Visible && <span>of</span>}
        </button>
        <button
          type="button"
          style={{ backgroundColor: bgColor }}
          onClick={() => setBg2Visible(!bg2Visible)}
        >
          BG2
          {!bg2Visible && <span>of</span>}
        </button>
        <input
          type="color"
          id="head"
          name="color-select"
          className="color-select"
          style={{ backgroundColor: bgColor }}
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button
          type="button"
          onClick={() => resetStyle()}
        >
          RESET
        </button>
      </div>
      <main className={mainClass} style={{ backgroundColor: bgColor }}>
        <div className="full-img blend-images">
          {(img1 && bg1Visible) && <img className="home-img" src={img1} alt="picsum" />}
          {(img2 && bg2Visible) && <img className="home-float" src={img2} alt="picsum" />}
        </div>
      </main>
    </>

  );
}
