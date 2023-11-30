import React, { useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import HomeSecondSection from '../../components/home/SecondSection';
import FourthSection from '../../components/home/FourthSection';
import TenSection from '../../components/home/TenSection';
import ThirdSection from '../../components/home/ThirdSection';

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
<ThirdSection />
<FourthSection />
<TenSection />
    </> 
  )
}

export default Home