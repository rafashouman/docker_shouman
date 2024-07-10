import React, { useState, useEffect } from "react";
import HomeLayout from "@src/layouts/HomeLayout";
import styles from "./style.module.scss";

type CarouselProps = {
  coupons: {
    image: string;
    couponCode: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ coupons }) => {
  const [stream, setStream] = useState<HTMLDivElement | null>(null);
  const [items, setItems] = useState<NodeListOf<HTMLDivElement> | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [isWheeling, setIsWheeling] = useState(false);

  useEffect(() => {
    setStream(
      document.querySelector(".Gallery__Stream") as HTMLDivElement | null,
    );
    setItems(document.querySelectorAll(".Gallery__Item"));
  }, []);

  const prevOnClick = () => {
    if (stream && items) {
      //insert first item after last item
      stream.insertBefore(items[items.length - 1], items[0]);
      // update items
      setItems(document.querySelectorAll(".Gallery__Item"));
    }
  };

  const nextOnClick = () => {
    if (stream && items) {
      //insert last item before first item
      stream.appendChild(items[0]);
      // update items
      setItems(document.querySelectorAll(".Gallery__Item"));
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEnd = event.changedTouches[0].clientX;
    const touchDiff = touchEnd - touchStart;

    if (touchDiff > 0) {
      prevOnClick();
    } else if (touchDiff < 0) {
      nextOnClick();
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!isWheeling) {
      setIsWheeling(true);
      setTimeout(() => {
        setIsWheeling(false);
      }, 100);

      if (event.deltaY > 0) {
        nextOnClick();
      } else if (event.deltaY < 0) {
        prevOnClick();
      }
    }
  };

  return (
    <HomeLayout>
      <section className={`Wrap ${styles.Wrap}`}>
        <div className="Gallery">
          <div
            className="Gallery__Prev"
            onClick={prevOnClick}
            aria-hidden="true"
          >
            <img src="/images/carousel/arrow.svg" alt="" />
          </div>
          <div
            className="Gallery__Next"
            onClick={nextOnClick}
            aria-hidden="true"
          >
            <img src="/images/carousel/arrow.svg" alt="" />
          </div>
          <div
            className="Gallery__Stream"
            ref={setStream}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            {coupons?.map(
              (
                coupon: {
                  image: string | undefined;
                  couponCode: string | undefined;
                },
                index: number,
              ) => (
                <div key={index} className="Gallery__Item">
                  <a href="/" className="Gallery__Link">
                    <img src={coupon.image} alt="" />

                    <div className="Gallery__Text">
                      <span>{index}</span>
                      <span>{coupon.couponCode}</span>
                    </div>
                  </a>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Carousel;

export async function getStaticProps() {
  const coupons = [
    {
      image: "/images/infinite-slider/arte1-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte2-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte3-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte4-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte5-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte6-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte7-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte8-mob.jpg",
      couponCode: "COUPONCODE",
    },
    {
      image: "/images/infinite-slider/arte9-mob.jpg",
      couponCode: "COUPONCODE",
    },
    /*{
      image: "/images/infinite-slider/arte10-mob.jpg",
      couponCode: "COUPONCODE",
    }, */
  ];

  return {
    props: {
      coupons,
    },
  };
}
