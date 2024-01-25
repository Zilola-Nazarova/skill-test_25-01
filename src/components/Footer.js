import styles from '../styles/Footer.module.scss';
import logo from "../assets/mnt_4.svg"

const Footer = () => (
  <div className={styles.footer}>
    <img src={logo}></img>
    <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
  </div>
);

export default Footer;
