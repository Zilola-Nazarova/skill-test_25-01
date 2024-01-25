import { TbPointFilled } from 'react-icons/tb';

import styles from '../styles/Bullet.module.scss';

const Bullet = ({ isActive, onClick }) => (
  <button
    aria-label="Navigate to another image"
    type="button"
    onClick={() => onClick()}
    className={isActive ? styles.active : ''}
  >
    <TbPointFilled className={styles.bullet} size="30px" />
  </button>
);

export default Bullet;
