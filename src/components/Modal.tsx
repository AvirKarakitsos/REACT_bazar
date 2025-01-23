import styles from '../assets/styles/Modal.module.css'
import { createPortal } from 'react-dom'
import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../utils/context/ModalContext';

function Modal() {
    const modalRoot = document.getElementById("modal-root")!;
    const {isOpen, setIsOpen, article} = useContext(ModalContext) as ModalContextType

    if(!isOpen) return null

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.imageContainer}>
                    <img src={article.photos[0].url} alt="" className={styles.image}/>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{article.title}</h3>
                        <p className={styles.description}>{article.description}</p>
                        <p className={styles.price}>{article.price+"€"}</p>
                    </div>
                    <div className={styles.available}>
                        <p className={styles.availableText}>Disponible sur</p>
                        <ul className={styles.availableSite}>
                            {article.availableOn.map(site => <li key={site.id}>{site.link}</li>)}
                        </ul>
                    </div>
                </div>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                X
                </button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal