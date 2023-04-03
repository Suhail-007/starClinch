import { useContext } from 'react';

import CategoryContext from '../../context/categoryContext';
import SingerCard from '../UI/SingerCard';

import styles from './category.module.css';

export default function Category({ category }) {
  const { data } = useContext(CategoryContext);

  const SINGERSLIST = data.d.map((singer, i) => {
    return (
      <SingerCard key={singer.id} name={singer.l} img={singer.i.imageUrl} category='singer' />
    )
  })

  return (
    <>
      <section className={styles['section__category']}>
        <div className={styles['section__category__heading']}>
          <h2>{category}</h2>
          <h3>Select an artist that matchies your vibes</h3>
        </div>
        
        <div className={styles['cards-cont']}>
          {SINGERSLIST}
        </div>
      </section>
    </>
  )
}