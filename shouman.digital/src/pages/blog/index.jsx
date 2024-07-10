import React, { useRef } from 'react';
import HomeLayout from '@src/layouts/HomeLayout';
import Code from '@src/components/Code';
// Styles

export default function Blog() {
  const inputEl = useRef(null);

  function onButtonClick() {
    inputEl.current.select();
    inputEl.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
  }

  return (
    <HomeLayout>
      <h2 className='Center--Title'>Página em contrução</h2>
      <div className="Page__Blog">
        <section>
          <Code />
        </section>
        {/* <section className="section-two">
          <input ref={inputEl} type="text" />
          <button type="button" onClick={onButtonClick}>COPIAR</button>
        </section> */}
        <h3>{}</h3>

      </div>
    </HomeLayout>
  );
}
