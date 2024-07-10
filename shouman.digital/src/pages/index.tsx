import React from 'react';
// layouts
import HomeLayout from '@src/layouts/HomeLayout';
import CanvasBlends from '@src/components/CanvasBlends';

interface HomeProps {
  API_URL: string;
}

export default function Home({ API_URL }:HomeProps) {
  return (
    <HomeLayout>
      <CanvasBlends mainClass="main-content" local="home" />
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
