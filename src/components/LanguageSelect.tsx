import styles from './LanguageSelect.module.scss'

const LanguageSelect = () => {
  return (
    <section id={styles.container}>
      <select id="langSelect" className={styles.selection}>
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
