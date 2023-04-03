import styles from './eventDetails.module.css';


export default function EventDetails() {
const date = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <section className={styles['category__details']}>
        <h2>Details :</h2>
        <div className={styles['event__details']}>
          <div className={styles['event__date']}>
            <h3>Event Date</h3>
            <p>{date}</p>
          </div>
          
          <div className={styles['event__location']}>
            <h3>Location</h3>
            <p>Delhi, India</p>
          </div>
        </div>
        
        <div className={styles.budget}>
          <h3>Budget</h3>
          <p>₹500,000</p>
        </div>
    </section>
  )
}