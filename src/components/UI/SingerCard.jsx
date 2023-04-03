import { useState, useRef } from 'react';

import styles from './SingerCard.module.css';

export default function SingerCard({ name, img, category }) {
  const [isSelect, setIsSelect] = useState(false);
  const displayImgRef = useRef()

  const onClickHandler = function(e) {

    if (!e.target.dataset) return

    if (e.target.dataset.btn === 'selectBtn') {
      setIsSelect(IS => !IS);
    }

    if (e.target.dataset.img === 'relatedImg') {
      displayImgRef.current.src = e.target.src;
    }

  }

  return (
    <div onClick={onClickHandler} data-select={isSelect ? 'selected' : 'select'} className={styles.card}>
    
      <img ref={displayImgRef} src={img} alt={name} />
      
      <div className={styles['card-details']}>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <p>Location</p>
        
        <div className={styles['event-booking']}>
          <p>Event Booking</p>
          <p>2793</p>
        </div>
        
        <div className={styles['related-pics']}>
          <img data-img='relatedImg' src={img} alt={name} />
          <img data-img='relatedImg' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&resize=640:*' alt={name} />
          <img data-img='relatedImg' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/piscescelebs-1582312966.png?crop=0.293xw:0.587xh;0.0256xw,0.0737xh&resize=1200:*' alt={name} />
          <img data-img='relatedImg' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-1665428944.jpg?crop=0.476xw:0.952xh;0.516xw,0.0160xh&amp;resize=640:*' alt={name} />
        </div>
        
        <button data-btn="selectBtn" className={isSelect ? `${styles['card-button']} ${styles.active}` : styles['card-button'] }> {isSelect ? 'selected' : 'select'} </button>
      </div>
      
    </div>
  )
}