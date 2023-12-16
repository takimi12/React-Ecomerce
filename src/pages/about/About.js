import React from 'react';
import Slider from 'react-slick';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './About.module.scss';
import face1 from '../../assets/img/About/1 (3).jpg';
import award from '../../assets/img/About/1.png';
import award2 from '../../assets/img/About/2.png';
import award3 from '../../assets/img/About/3.png';
import award4 from '../../assets/img/About/4.png';
import award5 from '../../assets/img/About/5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const leaders = [
    { name: 'Robert Downey Jr', role: 'CEO Fouder', image: face1 },
    { name: 'Leader 2', role: 'Role 2', image: face1 },
    { name: 'Leader 3', role: 'Role 3', image: face1 },
    { name: 'Leader 4', role: 'Role 4', image: face1 },
    { name: 'Leader 5', role: 'Role 5', image: face1 },
    { name: 'Leader 6', role: 'Role 6', image: face1 },
    { name: 'Leader 7', role: 'Role 7', image: face1 },
  ];

  const awards = [
    { name: 'Award 1', image: award },
    { name: 'Award 2', image: award2 },
    { name: 'Award 3', image: award3 },
    { name: 'Award 4', image: award4 },
    { name: 'Award 5', image: award5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: false,
    autoplay: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };
  

  return (
    <div className={styles.About}>
      <div className={styles.ourTeam}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h3>Meet Our Leaders</h3>
          </div>
          <div className={styles.content}>
            {leaders.map((leader, index) => (
              <figure key={index}>
                <div className={styles.ourTeam}>
                  <img src={leader.image} alt={leader.name} />
                  <div className={styles.blockContent}>
                    <h4>{leader.name}</h4>
                    <p>{leader.role}</p>
                    <ul className={styles.uList}>
                      <li><a href="#"><FaTwitter /></a></li>
                      <li><a href="#"><FaFacebook /></a></li>
                      <li><a href="#"><FaLinkedin /></a></li>
                    </ul>
                  </div>
                </div>
              </figure>
            ))}
            <figure className={styles.ourTeam}>
              <div className={styles.ourTeamText}>
                <a href="#">Become <br /> member in <br /> team</a>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.awards}>
        <div className="container">
          <div className="ps-section__header">
            <h4 className={styles.awardsHeading}>Awards & Recognition</h4>
            <p className={styles.paragraph}>Industry leaders and influencers recognize Overstock as one of the most trustworthy retail companies in the U.S., ranking high for both customer and employee satisfaction.</p>
          </div>
          <div className={styles.imageContent}>
            <Slider {...settings}>
              {awards.map((award, index) => (
                <div key={index} className={styles.awardsImage}>
                  <a href="/page/blank">
                    <img src={award.image} alt={award.name} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
