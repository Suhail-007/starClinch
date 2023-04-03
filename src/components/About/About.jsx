import styles from './about.module.css';

const TC = ['All acts are subject to availability', 'GST @18% will be applicable We take an advance of 50% to confirm a show', 'Quotation is valid for 14 days and subject to change', 'The balance amount needs to be paid 7 days before the show', 'TBL (Travel, Boarding & Lodging) will be arranged by the organizer', 'Tech-Rider (sound, stage & lighting) will be arranged by the organizer', 'EMI is applicable for payments made by Credit Cards only'];

export default function About() {

  return (
    <section className={styles.about}>
      <div className={styles['about__heading']}>
        <h2>6000+ Users trust StarClinch.</h2>
        <h4>Booking Terms & Conditions</h4>
      </div>
      
      <div className={styles['about__details']}>
        <div className={styles['about__details__heading']}>
          <h2>BOOKING TERMS & CONDITIONS FOR CLIENT
          </h2>
        
          <h4>
            Advance Fee and Payment Terms
          </h4>
        </div>
      </div>
      
      <div className={styles['about__terms']}>
        {TC.map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </section>
  )
}