import styles from '../assets/styles/Category.module.css';
// import Article from './Article';
import { CategoryType } from '../utils/types/project';

type CategoryProps = {
    category: CategoryType;
};

function Category({ category }: CategoryProps) {
    return (
        <section id={`category_${category.id}`} className={styles.container}>
            <h3 className={styles.title}>{category.name}</h3>

            {/* <div className={styles.articlesContainer}>
                    {result.map((item) => (
                        <Article key={item.id} article={item} />
                    ))}
                </div>
           
                <div className={styles.message}>
                    <p>Pas d'article pour le moment</p>
                </div> */}
        </section>
    );
}

export default Category;
