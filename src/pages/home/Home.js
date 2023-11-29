import React, { useEffect } from 'react'
import Slider from '../../components/slider/Slider'
import HomeSecondSection from '../../components/home/SecondSection';

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
    </> 
  )
}

export default Home