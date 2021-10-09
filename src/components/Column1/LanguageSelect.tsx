import styles from './LanguageSelect.module.scss'

import { Dispatch, SetStateAction } from 'react'

interface LanguageProps {
  setLanguage: Dispatch<SetStateAction<string>>
}

const LanguageSelect = ({ setLanguage }: LanguageProps) => {
  // const langRef = useRef<HTMLSelectElement>(null)
  // useEffect(() => {

  // }, [])

  return (
    <section id={styles.container}>
      <select id="langSelect" className={styles.selection} onChange={(e) => setLanguage(e.target.value)} required>
        <option value="">Select a Language</option>
        <option value="Spanish">Spanish</option>
      </select>
      <select id="collectionSelect" className={styles.selection}>
        <option value="">Select a Collection</option>
        <option value="Collection 1">Collection 1</option>
        <option value="Collection 2">Collection 2</option>
        <option value="Collection 3">Collection 3</option>
      </select>
    </section>
  )
}

export default LanguageSelect
