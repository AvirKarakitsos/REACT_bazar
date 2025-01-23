import styles from '../assets/styles/Modal.module.css'
import { createPortal } from 'react-dom'
import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../utils/context/ModalContext';

function Modal() {
    const modalRoot = document.getElementById("modal-root")!;
    const {isOpen, setIsOpen} = useContext(ModalContext) as ModalContextType

    if(!isOpen) return null

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                X
                </button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal