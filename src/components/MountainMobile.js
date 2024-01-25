import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Climb.module.scss';

const MountainMobile = ({ data, index, isActive }) => {
  return (
    <div
      className={`${isActive ? `${styles.active} ${styles.wrapper_mobile}` : styles.wrapper_mobile}`}
      style={{order: (index * 2) + 1}}
    >
      <div className={styles.schedule}>
        <h3>Schedule</h3>
        <table>
          <tbody>
            <tr key="date">
              {data.schedule.map((event) => (
                <td key={uuidv4()}>{event.date}</td>
              ))}
            </tr>
            <tr key="description">
              {data.schedule.map((event) => (
                <td key={uuidv4()}>{event.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MountainMobile;
