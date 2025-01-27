import { useContext } from 'react'
import styles from '../assets/styles/Article.module.css'
import { ArticleType } from '../utils/types/project'
import { ModalContext, ModalContextType } from '../utils/context/ModalContext'
import { host } from '../utils/common/constants'

type ArticleProps = {
    article: ArticleType
}

function Article(item: ArticleProps) {
    const {setIsOpen,setArticle} = useContext(ModalContext) as ModalContextType
    const handleModal = () => {
        setArticle(item.article)
        setIsOpen(true)
    }
    
    return (
        <article className={styles.container} onClick={handleModal}>
            <div className={styles.imageContainer}>
                <img src={host+item.article.photos[0].url} className={styles.image}/>
            </div>
            <div className={styles.description}>
                <p className={styles.title}>{item.article.title}</p>
                <p className={styles.content}>{item.article.description}</p>
                <p className={styles.price}>{"A partir de "+item.article.price+"€"}</p>
            </div>
        </article>
    )
}

export default Article