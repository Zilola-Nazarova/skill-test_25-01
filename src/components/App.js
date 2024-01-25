import styles from '../styles/App.module.css';

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
