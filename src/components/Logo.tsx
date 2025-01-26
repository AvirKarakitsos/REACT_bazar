import styles from '../assets/styles/Logo.module.css'
import { WebsiteType } from '../utils/types/project'

type LogoProps= {
  logoItem: WebsiteType

}

function Logo(item: LogoProps) {

  return (  
    <figure className={styles.container}>
        <img src={item.logoItem.logo} alt="" className={styles.image}/>
        <figcaption>{item.logoItem.name}</figcaption>
    </figure>
  )
}

export default Logo