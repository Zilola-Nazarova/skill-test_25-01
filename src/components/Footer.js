import logo from '../assets/mnt_4.svg';
import styles from '../styles/Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <img src={logo} alt="Company logo and name"></img>
    <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
  </div>
);

export default Footer;
