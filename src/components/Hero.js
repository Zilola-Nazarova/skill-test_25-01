import styles from '../styles/Hero.module.scss';
import logo from "../assets/mnt_1.svg"
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => (
  <div className={styles.hero}>
    <header>
      <img src={logo}></img>
      <nav>
        <Link smooth to="#history">
          01. History
        </Link>
        <Link smooth to="#climb">
          01. Team
        </Link>
      </nav>
    </header>
  </div>
);

export default Hero;
