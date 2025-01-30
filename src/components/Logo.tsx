import styles from '../assets/styles/Logo.module.css'
import { WebsiteType } from '../utils/types/project'

type LogoProps= {
  logoItem: WebsiteType
}

function Logo(item: LogoProps) {

  return (  
    <figure className={styles.container}>
        <img src={item.logoItem.logo} alt={`logo ${item.logoItem.name}`} className={styles.image}/>
    </figure>
  )
}

export default Logo