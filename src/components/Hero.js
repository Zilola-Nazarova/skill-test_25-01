import { HashLink as Link } from 'react-router-hash-link';
import styles from '../styles/Hero.module.scss';
import logo from "../assets/mnt_1.svg"

const Hero = () => (
  <div className={styles.hero}>
    <header>
      <img src={logo}></img>
      <nav>
        <Link smooth to="#history">
          01. History
        </Link>
        <Link smooth to="#climb">
          02. Team
        </Link>
      </nav>
    </header>
  </div>
);

export default Hero;
