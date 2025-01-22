import styles from '../assets/styles/Header.module.css'

function Header() {

  return (
    <div className={styles.container}>
      <div>logo</div>      
      <h1>Header Part</h1>
      <span>likes</span>
    </div>
  )
}

export default Header