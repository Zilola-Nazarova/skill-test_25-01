import { v4 as uuidv4 } from 'uuid';

import data from './mountainData';

import styles from '../styles/Climb.module.scss';

const Mountain = ({ tab }) => {
  const { schedule } = data[tab];
  return (
    <div
      className={styles.wrapper}
      style={{order: (tab * 2) + 1}}
    >
      <div className={styles.schedule}>
        <h3>Schedule</h3>
        <table>
          <tbody>
            <tr key="date">
              {schedule.map((event) => (
                <td key={uuidv4()}>{event.date}</td>
              ))}
            </tr>
            <tr key="description">
              {schedule.map((event) => (
                <td key={uuidv4()}>{event.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mountain;
