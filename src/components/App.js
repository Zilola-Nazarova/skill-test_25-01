import styles from '../styles/App.module.scss';
import Hero from './Hero';
import StickyNav from './StickyNav';
import History from './History';
import Carousel from './Carousel';
import Climb from './Climb';
import Footer from './Footer';

function App() {
  return (
    <div className={styles.app}>
      <Hero />
      <StickyNav />
      <History />
      <Carousel />
      <Climb />
      <Footer />
    </div>
  );
}

export default App;
