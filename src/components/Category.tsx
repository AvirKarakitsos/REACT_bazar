import styles from '../assets/styles/Category.module.css'
import Article from './Article'
import articles from '../utils/project/articles.json'
import { CategoryType } from '../utils/types/project'
import { host } from '../utils/common/constants'

type CategoryProps = {
    categoryElement: CategoryType
}

function Category(category: CategoryProps) {
    const result = articles.filter(articleFilter => articleFilter.categoryId === category.categoryElement.id)

    return (
        <section className={styles.container}>
            <img src={host+category.categoryElement.banner} className={styles.banner}/>

            {
                articles.filter(articleFilter => articleFilter.categoryId === category.categoryElement.id)[0] !== undefined 
                    ?   <div className={styles.articlesContainer}>
                            { result.map(item => <Article key={item.id} article={item}/>) }
                        </div>
                    :   <div className={styles.message}>
                            <p>Pas d'article pour le moment</p>
                        </div>
            }  
            
        </section>
  )
}

export default Category