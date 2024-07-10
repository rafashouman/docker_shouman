import React from "react";
import Link from "next/link";
// layouts
import HomeLayout from "@src/layouts/HomeLayout";

export default function PortfolioWeb() {
  return (
    <HomeLayout>
      <nav className="nav webdev-page">
        <ul>
          {/* <li>
            <Link href="webdev/arknoid">Arknoid</Link>
          </li> */}
          <li>
            <Link href="webdev/images-blend">Images Blend</Link>
          </li>
          <li>
            <Link href="webdev/loop-carousel">Loop Carousel</Link>
          </li>
          <li>
            <Link href="webdev/loop-carousel-2">Loop Carousel 2</Link>
          </li>
        </ul>
      </nav>
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.API_URL_ARTICLES;

  return {
    props: {
      API_URL,
    },
  };
}

