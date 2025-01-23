import styles from '../assets/styles/Logo.module.css'
import { WebsiteType } from '../utils/types/project'

type LogoProps= {
  website: WebsiteType

}

function Logo(item: LogoProps) {

  return (  
    <figure className={styles.container}>
        <img src={item.website.logo} alt="" className={styles.image}/>
        <figcaption>{item.website.name}</figcaption>
    </figure>
  )
}

export default Logo