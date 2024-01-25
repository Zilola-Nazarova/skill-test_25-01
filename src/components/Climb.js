import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

import data from './mountainData';
import Tab from './Tab';
import Mountain from './Mountain';
import MountainMobile from "./MountainMobile";

import styles from '../styles/Climb.module.scss';

const Climb = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
      setActiveTab(index + 1);
  };

  return(
    <section id="climb" className={styles.climb}>
      <div className={styles.main}>
        <h2>
          <span className="number">02.</span>
          <span className="title">Climb</span>
        </h2>
        <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
      </div>
      <div className={styles.mountains}>
        <ul className={styles.tabs}>
          {data.map((mountain, index) => (
            <Tab
              key={uuidv4()}
              label={index}
              onClick={() => handleTabClick(index)}
              isActive={(index + 1) === activeTab}
            />
          ))}
        </ul>
        {data.map((mountain, index) => (
          <MountainMobile
            key={uuidv4()}
            data={mountain}
            index={index}
            isActive={(index + 1) === activeTab}
          />
        ))}
        <Mountain tab={activeTab - 1} />
      </div>
    </section>
  );
};

export default Climb;
