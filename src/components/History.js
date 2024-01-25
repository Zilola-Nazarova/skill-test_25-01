import ImageCarousel from './ImageCarousel';

import styles from '../styles/History.module.scss';

const History = () => (
  <section id="history" className={styles.history}>
    <div className={styles.paragraph}>
      <h2>
        <span className="number">01.</span>
        <span className="title">History</span>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
    </div>
    <ImageCarousel />
  </section>
);

export default History;
