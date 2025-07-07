import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Modal from './components/Modal';
import categories from './utils/project/categories.json';
import websites from './utils/project/websites.json';
import image from './assets/images/vg_republique.png';
import { ModalProvider } from './utils/context/ModalProvider';

function App() {
    return (
        <ModalProvider>
            <Header headerItems={categories} />
            <div className="headerComponent">
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

            <div>
                <p className="subContent">
                    Tous nos articles disponibles sur les différentes
                    plateformes
                </p>
                <ul className="headerList">
                    {websites.map((website) => (
                        <li key={website.id}>
                            <Logo logoItem={website} />
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {categories.map((category) => (
                    <Category key={category.id} categoryItem={category} />
                ))}
            </div>
            <Modal />
            <Footer />
        </ModalProvider>
    );
}

export default App;
