import styles from '../styles/App.module.scss';
import Hero from './Hero';
import StickyNav from './StickyNav';
import History from './History';
import Carousel from './Carousel';
import Climb from './Climb';
import Footer from './Footer';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout />
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Hero />} />
    //     <Route path="history" element={<History />} />
    //     <Route path="climb" element={<Climb />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
