import styles from './ImageUploadAndInfo.module.scss'

const ImageUploadAndInfo = () => {
  return (
    <div id={styles.container}>
      <section id={styles.imageSelect}>
        <label htmlFor="imageUpload">Select an Image</label>
        <br />
        <input type="file" name="upload" id="upload" />
      </section>
      <section id={styles.imageInfo}>
        <label htmlFor="info">Image Information</label>
        <br />
        <textarea id="info" rows={6} cols={30}></textarea>
      </section>
    </div>
  )
}

export default ImageUploadAndInfo
