import styles from '../assets/styles/Category.module.css';
import Article from './Article';
import { ArticleType, CategoryType } from '../utils/types/project';
import { useFetch } from '../utils/common/useFetch';
import { serverUrl } from '../utils/common/constants';

type CategoryProps = {
    category: CategoryType;
};

type FetchCategory = {
    load: boolean;
    data: ArticleType[];
};

function Category({ category }: CategoryProps) {
    const { load: loadArticle, data: article }: FetchCategory = useFetch(
        `${serverUrl}/api/articles/online/category/${category.id}`,
    );

    return (
        <section id={`category_${category.id}`} className={styles.container}>
            <h3 className={styles.title}>{category.name}</h3>

            {!loadArticle ? (
                <div className={styles.articlesContainer}>
                    {article.map((item) => (
                        <Article key={item.id} article={item} />
                    ))}
                </div>
            ) : null}

            {/* <div className={styles.message}>
                    <p>Pas d'article pour le moment</p>
                </div> */}
        </section>
    );
}

export default Category;
