import styles from '../assets/styles/Article.module.css'
import { article } from '../utils/types/article'

type ArticleType = {
    article: article
}

function Article(item: ArticleType) {

    return (
        <article className={styles.container}>
            <img src={item.article.photos[0].url} className={styles.picture}/>
            <div className={styles.description}>
                <p className={styles.title}>{item.article.title}</p>
                <p className={styles.content}>{item.article.description}</p>
                <p className={styles.price}>{"A partir de "+item.article.price+"€"}</p>
            </div>
        </article>
    )
}

export default Article