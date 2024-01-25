import { v4 as uuidv4 } from 'uuid';
import {
  useRef,
  useState,
  createRef
} from 'react';

import Bullet from './Bullet';

import styles from '../styles/Carousel.module.scss';

const images = ['./carousel_1.png', './carousel_2.png', './carousel_3.png', './carousel_4.png', './carousel_5.png', './carousel_6.png']

const ImageCarousel = () => {
  const [tab, setTab] = useState(0);
  const elementsRef = useRef(images.map(() => createRef()));
  const container = useRef(null);
  const handleClick = (index) => {
    setTab(index);
    const ref = elementsRef.current[index];
    container.current.scrollTo({
      left: ref.current.offsetLeft,
      behavior: 'smooth',
    });
  };

  const bullets = [];
  for (let i = 0; i < 3; i += 1) {
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
    <div className={styles.carousel} ref={container}>
      {images.map((image, i) => (
        <img
          src={image}
          className={styles.preview}
          ref={elementsRef.current[i]}
          key={uuidv4()}
        />
      ))}
    </div>
    <div className={styles.nav}>
      {bullets}
    </div>
  </div>
  );
};

export default ImageCarousel;
