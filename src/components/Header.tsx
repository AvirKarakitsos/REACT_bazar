import styles from '../assets/styles/Header.module.css';
import { CategoryType } from '../utils/types/project';
import logo from '../assets/images/logo_bazar.png';

type HeaderProps = {
    headerItems: CategoryType[];
};

function Header(items: HeaderProps) {
    return (
        <div className={styles.container}>
            <img
                className={styles.logo}
                src={logo}
                alt="logo bazar d'Avir"
                height={50}
            />
            {window.innerWidth > 768 ? (
                <ul className={styles.navbar}>
                    {items.headerItems.map((category) => (
                        <li key={category.id}>
                            <a
                                className={styles.link}
                                href={`#category_${category.id}`}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Header;
