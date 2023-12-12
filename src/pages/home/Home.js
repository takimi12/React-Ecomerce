import React, { useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import HomeSecondSection from '../../components/home/SecondSection';
import FourthSection from '../../components/home/FourthSection';
import NineSection from '../../components/home/TenSection';
import HomeFivethSection from '../../components/home/FiveSection';
import SixSection from '../../components/home/SixSection';
import SevenSection from '../../components/home/SevenSection';
import EightSection from '../../components/home/EightSection';
import TenSection from '../../components/home/NineSection';



const Home = () => {
  const url = window.location.href;

  const scrollToProducts = () => {
    if (url.includes("#products")) {
        window.scrollTo({
          top:700,
          behavior: "smooth",
        });
        return;
    }
  }

  useEffect(() => {
    scrollToProducts()
  }, []);
  
  return (
    <>
<Slider />
<HomeSecondSection />
<FourthSection />
<HomeFivethSection />
<SixSection />
<SevenSection />
<EightSection />
<NineSection />
<TenSection />
    </> 
  )
}

export default Home