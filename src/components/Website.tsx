import styles from '../assets/styles/Website.module.css';
import { host } from '../utils/common/constants';
import { WebsiteType } from '../utils/types/project';

type WebsiteProps = {
    website: WebsiteType;
};

function Website({ website }: WebsiteProps) {
    return (
        <figure className={styles.container}>
            <a href={website.link} target="_blank" rel="noreferrer">
                <img
                    src={host + '/logos' + website.logoShort}
                    alt="logo"
                    className={styles.image}
                />
            </a>
            {/* <figcaption className={styles.title}>{result.name}</figcaption> */}
        </figure>
    );
}

export default Website;
