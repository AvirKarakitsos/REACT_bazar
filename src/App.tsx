import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Modal from './components/Modal';
import websites from './utils/project/websites.json';
import image from './assets/images/vg_republique.png';
import { useFetch } from './utils/common/useFetch';
import { ModalProvider } from './utils/context/ModalProvider';
import { serverUrl } from './utils/common/constants';
import { CategoryType } from './utils/types/project';

type FetchApp = {
    load: boolean;
    data: CategoryType[];
};

function App() {
    const { load: loadCategories, data: categories }: FetchApp = useFetch(
        `${serverUrl}/api/categories`,
    );

    return (
        <ModalProvider>
            <Header data={categories} load={loadCategories} />
            <div className="topSection">
                <div className="imageContainer">
                    <img
                        className="mainImage"
                        src={image}
                        alt="photo place de la République"
                    />
                </div>
                <div className="subTitleBox">
                    <h2 className="subTitle">
                        chine et deniche dans le Bazar d'Avir
                    </h2>
                </div>
            </div>

            <div className="subContainer">
                <p className="subContent">
                    Tous nos articles disponibles sur les différentes
                    plateformes
                </p>
                <ul className="subList">
                    {websites.map((website) => (
                        <li key={website.id}>
                            <Logo logoItem={website} />
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {!loadCategories
                    ? categories.map((category) => (
                          <Category key={category.id} category={category} />
                      ))
                    : null}
            </div>
            <Modal />
            <Footer />
        </ModalProvider>
    );
}

export default App;
