import { AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

import FooterLinks from './FooterLinks'

import logo from '../../assets/starclinch.png'
import payments from '../../assets/payment.png'
import styles from './footer.module.css';

const SOCIAL_LINKS = [
  {
    link: '#',
    icon: <AiFillYoutube />
  },
  {
    link: '#',
    icon: <AiFillTwitterCircle />
  },
  {
    link: '#',
    icon: <BsFacebook />
  },
  {
    link: '#',
    icon: <BsInstagram />
  }
];

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__heading']}>
        <img src={logo} alt='StarClinch' />
        <h2>StarClinch</h2>
        
        <div className={styles['footer__social-links']}>
          {SOCIAL_LINKS.map((li, i) => {
            return <a key={i} href={li.link}>{li.icon}</a>
          })}
      </div>
      </div>
      
      <FooterLinks /> 
      
      <address className={styles['footer__address']}>
        <h4>
          REGISTERED OFFICE ADDRESS:
        </h4>
        
        <p>
          VINSM Globe Private Limited Percept House, Ground Floor East of Kailash, New Delhi CIN: U52605DL2012PTC236944 Phone: +91 11 498 498 01
        </p>
        
        <a href='#'>
          Contact Us
        </a>
      </address>
      
      <div className={styles['payments']}> 
        <img src={payments} alt='payments accept in' />
      </div>
      
      <div className={styles.copyright}>
        <p>
          &copy; Copyright 2015-2023 | <a href="#">VINSM Globe Pvt. Ltd.</a> | All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}