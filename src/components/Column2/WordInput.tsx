import styles from './WordInput.module.scss'

const WordInput = () => {
  return (
    <section id={styles.container}>
      <div className={`${styles.inputBox} ${styles.blue}`}>
        <label>Spanish</label>
        <input type="text" name="spanishWord" id={styles.spanishWord} />
      </div>
      <div className={styles.inputBox}>
        <label>English</label>
        <input type="text" name="englishWord" id={styles.englishWord} />
      </div>
    </section>
  )
}

export default WordInput
