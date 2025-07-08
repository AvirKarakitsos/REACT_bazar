import styles from '../assets/styles/Modal.module.css';
import Website from './Website';
import { createPortal } from 'react-dom';
import { MouseEvent, SyntheticEvent, useContext, useState } from 'react';
import { ModalContext, ModalContextType } from '../utils/context/ModalContext';
import { host } from '../utils/common/constants';

function Modal() {
    const modalRoot = document.getElementById('modal-root')!;
    const { isOpen, setIsOpen, article } = useContext(
        ModalContext,
    ) as ModalContextType;
    const [display, setDisplay] = useState('');
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    function handleImageShort(event: MouseEvent<HTMLDivElement>) {
        const target = event.target as HTMLElement;
        const parentDiv = event.currentTarget;
        const childImages = parentDiv.querySelectorAll('img');

        if (target.tagName === 'IMG') {
            const imgElement = target as HTMLImageElement;
            setDisplay(imgElement.src);
            childImages.forEach((img) => {
                img.classList.remove('selected');
            });
            imgElement.classList.add('selected');
        }
    }

    function handleImageLoad(event: SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setDimensions({ width: naturalWidth, height: naturalHeight });
    }

    function modalClose() {
        setIsOpen(false);
        setDisplay('');
    }

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.imagesContainer}>
                    <div className={styles.imageContainer}>
                        <img
                            onLoad={handleImageLoad}
                            src={
                                display === ''
                                    ? host + '_' + article.id + '_0'
                                    : display
                            }
                            alt="photo de l'article"
                            className={
                                dimensions.height > dimensions.width
                                    ? styles.image
                                    : styles.imageW
                            }
                        />
                    </div>
                    <div
                        className={styles.subSection}
                        onClick={handleImageShort}
                    >
                        {[...Array(article.photos)].map((_, i) => (
                            <img
                                key={i}
                                src={host + '_' + article.id + '_' + i}
                                className={styles.shortImage}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{article.title}</h3>
                        <p className={styles.description}>
                            {article.description}
                        </p>
                        <p className={styles.price}>{article.price + '€'}</p>
                    </div>
                    <div className={styles.available}>
                        <p className={styles.availableText}>Disponible sur</p>
                        <ul className={styles.availableSite}>
                            {article.websites.map((site) => (
                                <li key={site.id}>
                                    <Website availabeOn={site} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className={styles.closeButton} onClick={modalClose}>
                    X
                </button>
            </div>
        </div>,
        modalRoot,
    );
}

export default Modal;
