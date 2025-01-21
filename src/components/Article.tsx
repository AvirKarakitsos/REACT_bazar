import styles from '../assets/styles/Article.module.css'
import { article } from '../utils/types/article'

type ArticleType = {
    key: number,
    article: article
}

function Article(item: ArticleType) {

    return (
        <article className={styles.container}>
            <picture className={styles.picture}></picture>
            <div className={styles.description}>
                <p>{item.article.title}</p>
                <p>{item.article.description}</p>
                <p>{"A partir de "+item.article.price+"€"}</p>
            </div>
        </article>
    )
}

export default Article