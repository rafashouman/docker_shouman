import React from 'react';
// layouts
import HomeLayout from '@src/layouts/HomeLayout';
import CanvasBlends from '@src/components/CanvasBlends';

export default function Home({ API_URL }) {
  return (
    <HomeLayout>
      <CanvasBlends mainClass="main-content" />
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL_ARTICLES;

  return {
    props: {
      API_URL,
    },
  };
}
