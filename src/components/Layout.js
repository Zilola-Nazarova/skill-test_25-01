import styles from '../styles/App.module.scss';
import Hero from './Hero';
import StickyNav from './StickyNav';
import History from './History';
import Climb from './Climb';
import Footer from './Footer';

function Layout() {
  return (
    <div className={styles.app}>
      <Hero />
      <StickyNav />
      <History />
      <Climb />
      <Footer />
    </div>
  );
}

export default Layout;
