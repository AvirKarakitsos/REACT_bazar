import { useContext } from 'react'
import styles from '../assets/styles/Article.module.css'
import { ArticleType } from '../utils/types/project'
import { ModalContext, ModalContextType } from '../utils/context/ModalContext'

type ArticleProps = {
    article: ArticleType
}

function Article(item: ArticleProps) {
    const {setIsOpen} = useContext(ModalContext) as ModalContextType

    return (
        <article className={styles.container} onClick={()=>setIsOpen(true)}>
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