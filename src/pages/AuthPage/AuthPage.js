// AuthPage.js

import React, { useState, useEffect } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import stylesImg from './ImageCarousel.scss'

const minimumInterval = 3000;

export default function AuthPage({ setUser }) {
  const [images, setImages] = useState([
    '/img/background1.png',
    '/img/background2.png',
    '/img/upcycled-art-cigarbutt.png',
    '/img/vintage-art-camera.png'
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const rotatedImages = [...images.slice(1), images[0]];
      setImages(rotatedImages);
    }, minimumInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <main className={styles.AuthPage}>
     <div className={stylesImg.ImageCarousel}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={minimumInterval}
          transitionTime={1000}
          stopOnHover={false}
          dynamicHeight={false}
          
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Carousel>
        </div>
      <div>
        <Logo />
      </div>
      <div>
        <SignUpForm setUser={setUser} />
      </div>
      <span></span>
      <div>
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
}
