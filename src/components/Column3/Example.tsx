import styles from './Example.module.scss'

const Example = () => {
  return (
    <section id={styles.container}>
      <label htmlFor="input">Example</label>
      <textarea id="input" rows={5} cols={30}></textarea>
    </section>
  )
}

export default Example
