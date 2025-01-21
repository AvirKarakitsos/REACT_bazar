import styles from '../assets/styles/Category.module.css'
import Article from './Article'
import articles from '../utils/project/articles.json'

type Categorytype = {
    key: number,
    categoryId: number
}

function Category(category: Categorytype) {
    const result = articles.filter(articleFilter => articleFilter.categoryId === category.categoryId)

    return (
        <section className={styles.container}>
            <div className={styles.banner}>logo</div>

            {
                articles.filter(articleFilter => articleFilter.categoryId === category.categoryId)[0] !== undefined 
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