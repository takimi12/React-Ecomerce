import SliderImage1 from "../../assets/img/components/FirstSection/slide-1.jpg";
import SliderImage2 from "../../assets/img/components/FirstSection/slide-2.jpg";
import SliderImage3 from "../../assets/img/components/FirstSection/slide-3.jpg";
import RightImage1 from "../../assets/img/components/FirstSection/promotion-1.jpg";
import RightImage2 from "../../assets/img/components/FirstSection/promotion-2.jpg";

export const sliderData = [
    {
      image: SliderImage1,
      heading: "Shoes Villa",
      desc: "Up to 30% off on all onsale products.",
    },
    {
      image: SliderImage2,
      heading: "Women Fashion",
      desc: "Up to 30% off on all onsale products.",
    },
    {
      image: SliderImage3,
      heading: "Men Fashion",
      desc: "Up to 30% off on all onsale products.",
    },
];
export const RightSection = [
  {
    image: RightImage1,
    heading: "Shoes Villa",
    desc: "Up to 30% off on all onsale products.",
    link: "/shop", // Dodano link do pierwszego elementu
  },
  {
    image: RightImage2,
    heading: "Another Villa",
    desc: "Up to 20% off on selected items.",
    link: "/shop", // Dodano link do drugiego elementu
  },
];