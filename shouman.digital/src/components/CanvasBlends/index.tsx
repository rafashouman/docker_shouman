import React, { useState, useEffect } from 'react';

export interface Props {
  mainClass: string;
  id?: any;
  local: string;

}

export default function CanvasBlends({ mainClass, id = null, local }:Props) {
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);
  const [bgColor, setBgColor] = useState('#f0f0f0');
  const [bg1Visible, setBg1Visible] = useState(true);
  const [bg2Visible, setBg2Visible] = useState(true);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  /*  cria uma ural para requisitar uma imagem da API lorem picsum */
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

  useEffect(() => {
    setImg1(makeUrl());
    setImg2(makeUrl());
  }, [width, height]);

  return (
    <>
      {local !== 'home' && (
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
      )}
      <main className={mainClass} style={{ backgroundColor: bgColor }}>
        <div className="full-img blend-images">
          {(img1 && bg1Visible) && <img className="home-img" src={img1} alt="picsum" />}
          {(img2 && bg2Visible) && <img className="home-float" src={img2} alt="picsum" />}
        </div>
      </main>
    </>

  );
}
