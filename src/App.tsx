import styles from './App.module.css'
import poweredimage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredimage} width={150} alt="" />
        </div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            ...
          </div>
          <div className={styles.rightSide}>
            ...
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;