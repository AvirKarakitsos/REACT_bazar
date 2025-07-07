import styles from '../assets/styles/Category.module.css';
import Article from './Article';
import articles from '../utils/project/articles.json';
import { CategoryType } from '../utils/types/project';

type CategoryProps = {
    categoryItem: CategoryType;
};

function Category(category: CategoryProps) {
    const result = articles.filter(
        (articleFilter) =>
            articleFilter.categoryId === category.categoryItem.id,
    );

    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{category.categoryItem.name}</h3>

            {articles.filter(
                (articleFilter) =>
                    articleFilter.categoryId === category.categoryItem.id,
            )[0] !== undefined ? (
                <div className={styles.articlesContainer}>
                    {result.map((item) => (
                        <Article key={item.id} article={item} />
                    ))}
                </div>
            ) : (
                <div className={styles.message}>
                    <p>Pas d'article pour le moment</p>
                </div>
            )}
        </section>
    );
}

export default Category;
