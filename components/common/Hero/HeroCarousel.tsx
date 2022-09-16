import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function HeroCarousel() {
  const items = [
    {
      image: "/playStationLogo.svg",
    },
    {
      image: "/xboxLogo.svg",
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysInvisible={true}
      indicators={false}
      animation="slide"
      sx={{
        width: "100%",
        height: "50%",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <div>
      <Image src={props.item.image} width={500} height={500} alt="logo" />
    </div>
  );
}
