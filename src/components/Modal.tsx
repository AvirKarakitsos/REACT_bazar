import styles from '../assets/styles/Modal.module.css'
import { createPortal } from 'react-dom'
import { SyntheticEvent, useContext, useState } from 'react';
import { ModalContext, ModalContextType } from '../utils/context/ModalContext';
import Website from './Website';
import { host } from '../utils/common/constants';

function Modal() {
    const modalRoot = document.getElementById("modal-root")!;
    const {isOpen, setIsOpen, article} = useContext(ModalContext) as ModalContextType
    const [display,setDisplay] = useState("")
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    function handleImageLoad(event: SyntheticEvent<HTMLImageElement>) {
        const { naturalWidth, naturalHeight } = event.currentTarget
        setDimensions({ width: naturalWidth, height: naturalHeight }) 
    }

    function modalClose() {
        setIsOpen(false)
        setDisplay("")
    }

    if(!isOpen) return null

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.imagesContainer}>
                    <div className={styles.imageContainer}>
                            <img 
                                onLoad={handleImageLoad} 
                                src={display === "" ? host+article.photos[0].url : host+display} 
                                alt="photo de l'article" 
                                className={dimensions.height > dimensions.width ? styles.image : styles.imageW}/>                 
                    </div>
                    <div className={styles.subSection}>
                        {article.photos.map(photo => <img key={photo.id} src={host+photo.url} className={styles.shortImage} onClick={() => setDisplay(photo.url)}/>)}
                    </div>
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
                            {article.availableOn.map(site => <li key={site.id}><Website availabeOn={site}/></li>)}
                        </ul>
                    </div>
                </div>
                <button className={styles.closeButton} onClick={modalClose}>
                X
                </button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal