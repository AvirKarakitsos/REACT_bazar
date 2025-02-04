import styles from '../assets/styles/Header.module.css'
import { CategoryType } from '../utils/types/project'

type HeaderProps = {
  headerItems: CategoryType[]
}

function Header(items: HeaderProps) {

	return (
		<div className={styles.container}>
			<h1 className={styles.mainTitle}>Le bazar d'Avir</h1>
			{window.innerWidth > 768
				? <div className={styles.categories}>
					<ul className={styles.navbar}>
						{items.headerItems.map(category => <li key={category.id}><a className={styles.link} href={`#category_${category.id}`}>{category.name}</a></li>)}
					</ul>
				</div>
				: null
			}
		</div>
  )
}

export default Header