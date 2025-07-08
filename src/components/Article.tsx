import styles from '../assets/styles/Article.module.css';
import { useContext } from 'react';
import { ArticleType } from '../utils/types/project';
import { ModalContext, ModalContextType } from '../utils/context/ModalContext';
import { host } from '../utils/common/constants';

type ArticleProps = {
    article: ArticleType;
};

function Article({ article }: ArticleProps) {
    const { setIsOpen, setArticle } = useContext(
        ModalContext,
    ) as ModalContextType;
    const handleModal = () => {
        setArticle(article);
        setIsOpen(true);
    };

    return (
        <article className={styles.container} onClick={handleModal}>
            <div className={styles.imageContainer}>
                <img
                    src={host + '_' + article.id + '_0'}
                    className={styles.image}
                />
            </div>
            <div className={styles.description}>
                <h4 className={styles.title}>{article.title}</h4>
                {/* <p className={styles.content}>{article.description}</p> */}
                <p className={styles.price}>
                    {'A partir de ' + article.price / 100 + '€'}
                </p>
            </div>
        </article>
    );
}

export default Article;
