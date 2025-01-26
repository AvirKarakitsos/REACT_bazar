import styles from '../assets/styles/Header.module.css'
import { CategoryType } from '../utils/types/project'

type HeaderProps = {
  headerItems: CategoryType[]
}

function Header(items: HeaderProps) {

  return (
    <div className={styles.container}>
		{/* <div>logo</div>       */}
		<div className={styles.categories}>
			<ul className={styles.navbar}>
				{items.headerItems.map(category => <li key={category.id}><a className={styles.link} href={`#category_${category.id}`}>{category.name}</a></li>)}
			</ul>
		</div>
    </div>
  )
}

export default Header