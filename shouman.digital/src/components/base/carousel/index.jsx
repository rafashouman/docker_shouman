import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';

const Carousel = () => {
  const [stream, setStream] = useState('');
  const [items, setItems] = useState('');

  /* const prev = document.querySelector('.Gallery__Prev');
  const next = document.querySelector('.Gallery__Next'); */

  useEffect(() => {
    /* const xstream = document.querySelector('.Gallery__Stream'); */
    setStream(document.querySelector('.Gallery__Stream'));
    setItems(document.querySelectorAll('.Gallery__Item'));
  }, []);

  const prevOnClick = () => {
    stream.insertBefore(items[items.length - 1], items[0]);
    /* insertBefore(what, where) */
    setItems(document.querySelectorAll('.Gallery__Item'));
  };

  const nextOnClick = () => {
    stream.appendChild(items[0]);
    setItems(document.querySelectorAll('.Gallery__Item'));
  };

  /* OBS: atualizamos o valor da variável items, isso é muito importante,
    pois uma vez que modificamos a posição dos itens no DOM, a variável
    precisa ter esses itens atualizados na ordem correta ou estaremos
    selecionando os itens errados no próximo clique */

  return (

    <section className={`Wrap ${styles.Wrap}`}>
      <div className="Gallery">
        <div className="Gallery__Prev" onClick={prevOnClick} aria-hidden="true"><img src="/images/carousel/arrow.svg" alt="" /></div>
        <div className="Gallery__Next" onClick={nextOnClick} aria-hidden="true"><img src="/images/carousel/arrow.svg" alt="" /></div>
        <div className="Gallery__Stream">
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_CADENCE.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_CONSUL.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_LG.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_MIDEA.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_OSTER.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_PHILCO.png" alt="" />
          </a>
          <a className="Gallery__Item" href="/">
            <img src="/images/carousel/black_friday_marcas_SAMSUNG.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
