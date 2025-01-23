import { createPortal } from 'react-dom'
import styles from '../assets/styles/Modal.module.css'

function Modal() {
const modalRoot = document.getElementById("modal-root")!;
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton}>
          X
        </button>
      </div>
    </div>,
    modalRoot
  )
}

export default Modal