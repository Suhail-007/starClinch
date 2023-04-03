import styles from './footerLinks.module.css';

const LINKS = [
  {
    heading: "for buyers",
    subLinks: [
      {
        title: "Our Buyers",
        link: '#'
      },
      {
        title: "Browse",
        link: '#'
      },
      {
        title: "Post your requirments",
        link: '#'
      },
      {
        title: "Entertainment on EMI",
        link: '#'
      }
    ]
  },
  {
    heading: "about us",
    subLinks: [
      {
        title: "Our Story",
        link: '#'
      },
      {
        title: "careers",
        link: '#'
      }
      ]
  }
  ]

export default function FooterLinks() {

  const footerLinks = LINKS.map((li, i) => {
    return (
      <div key={i} className={styles['sub-links']}> 
        <h3>{li.heading}</h3>
        
        <ul>
          {li.subLinks.map((sl,i) => {
            
            return (
              <li key={i}>
                <a href={sl.link}>{sl.title} </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  });


  return (
    <div className={styles['footer__links']}>
      {footerLinks}
      {footerLinks}
    </div>
  )
}