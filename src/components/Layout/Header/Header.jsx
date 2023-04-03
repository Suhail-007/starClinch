import headerLogo from '../../../assets/starclinch.png'

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['logo-cont']}>
        <div className={styles['img-cont']}>
          <img src={headerLogo} alt="StarClinch" />
        </div>
          <span className={styles.websiteName}>StarClinch</span>
      </div>
        
        <p className={styles.username}>Hello, <span>Suhail</span></p>
    </header>
  )
}