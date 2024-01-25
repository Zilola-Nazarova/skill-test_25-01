import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import img_1 from '../assets/carousel_1.png'
import img_2 from '../assets/carousel_2.png'
import img_3 from '../assets/carousel_3.png'
import img_4 from '../assets/carousel_4.png'
import Bullet from './Bullet';

import styles from '../styles/Carousel.module.scss';


const ImageCarousel = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (index) => {
    
  };

  const bullets = [];
  for (let i = 0; i < 4; i += 1) {
    bullets.push(
      <Bullet
        key={uuidv4()}
        isActive={tab === i}
        onClick={() => handleClick(i)}
      />,
    );
  }

  return (
  <div className={styles.bg}>
    <div className={styles.carousel}>
      <img src={img_1} alt="landscape"></img>
      <img src={img_2}></img>
      <img src={img_3}></img>
      <img src={img_4}></img>
    </div>
    <div className={styles.nav}>
      {bullets}
    </div>
  </div>
  );
};

export default ImageCarousel;
