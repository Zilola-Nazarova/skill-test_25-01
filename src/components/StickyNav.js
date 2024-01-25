import { HashLink as Link } from 'react-router-hash-link';

import logo from '../assets/mnt_3.svg';

import styles from '../styles/StickyNav.module.scss';

const StickyNav = () => (
  <div className={styles.sticky}>
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

export default StickyNav;
