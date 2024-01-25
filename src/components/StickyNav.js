import styles from '../styles/StickyNav.module.scss';
import { NavLink } from "react-router-dom";
import logo from "../assets/mnt_3.svg"

const StickyNav = () => (
  <div className={styles.sticky}>
    <header>
      <img src={logo}></img>
      <nav>
        <NavLink to="history">
          01. History
        </NavLink>
        <NavLink to="climb">
          01. Team
        </NavLink>
      </nav>
    </header>
  </div>
);

export default StickyNav;
