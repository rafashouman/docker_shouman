import '../styles/globals.scss';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// context;
import DataContext, { data } from '../data/DataContext';
// Components;
import StyledComponent from '../components/StyledComponent';
import getLocationAndBredcrumbs from '../utils/LocationInfo';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [state, setState] = useState(data);

  useEffect(() => {
    const temp = getLocationAndBredcrumbs(router.route, state, setState);
    console.log('temp', temp);
    // getLocation()
  }, [router.route]);

  const newProps = Object.assign(pageProps, { router });

  return (
    <DataContext.Provider value={{ state, setState }}>
      <StyledComponent classBody={state.location}>
        {// eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...newProps} />
        }
      </StyledComponent>
    </DataContext.Provider>
  );
}

export default MyApp;
