import styles from './WordInput.module.scss'
import { Dispatch, SetStateAction } from 'react'

interface wordProps {
  setWord: Dispatch<SetStateAction<string>>
  setTranslation: Dispatch<SetStateAction<string>>
}

const WordInput = ({setWord, setTranslation}: wordProps) => {
  return (
    <section id={styles.container}>
      <div className={`${styles.inputBox} ${styles.blue}`}>
        <label>Spanish</label>
        <input type="text" name="spanishWord" id={styles.spanishWord} onChange={(e) => setWord(e.target.value)} required />
      </div>
      <div className={styles.inputBox}>
        <label>English</label>
        <input type="text" name="englishWord" id={styles.englishWord} onChange={(e) => setTranslation(e.target.value)} required />
      </div>
    </section>
  )
}

export default WordInput
