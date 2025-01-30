import styles from '../assets/styles/Website.module.css'
import websites from '../utils/project/websites.json'
import {host} from '../utils/common/constants'
import { AvailableOnType } from '../utils/types/project'

type WebsiteProps = {
    availabeOn: AvailableOnType
}


function Website(site: WebsiteProps) {
    const result = websites.filter(website => website.id === site.availabeOn.websiteId)[0]

    return (
       <figure className={styles.container}>
            <a href={site.availabeOn.link} target="_blank" rel="noreferrer">
                <img src={host+result.logoShort} alt="logo" className={styles.image}/>
            </a>
            <figcaption className={styles.title}>{result.name}</figcaption>
       </figure>
    )
}

export default Website