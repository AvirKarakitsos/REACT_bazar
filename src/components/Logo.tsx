import styles from '../assets/styles/Logo.module.css'
import { WebsiteType } from '../utils/types/project'

type LogoProps= {
  logoItem: WebsiteType
}

function Logo(item: LogoProps) {

  return (  
    <img src={item.logoItem.logo} alt={`logo ${item.logoItem.name}`} className={`logo_${item.logoItem.id} ${styles.image}`}/>
  )
}

export default Logo