import EventDetails from '../Events/EventDetails';
import Category from '../Categories/Category';
import About from '../About/About';
import Footer from '../Layout/Footer';

import styles from './main.module.css';

export default function Main() {

  return (
    <>
      <h1 className={styles['main__heading']}>Shortlist</h1>
    
      <EventDetails />
      
      <Category category='singer' />
      
      <About />
      
      <Footer />
    </>
  )
}