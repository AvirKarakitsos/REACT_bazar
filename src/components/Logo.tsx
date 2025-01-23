import styles from '../assets/styles/Logo.module.css'

type LogoProps= {
  website: {
    id: number;
    name: string;
    logo: string;
}

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