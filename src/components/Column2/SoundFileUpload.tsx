import styles from './SoundFileUpload.module.scss'

const SoundFileUpload = () => {
  return (
    <section id={styles.container}>
      <label htmlFor="soundUpload">Select a sound file</label>
      <br />
      <input type="file" name="soundUpload" id="soundUpload" />
    </section>
  )
}

export default SoundFileUpload
