import LanguageSelect from "../components/Column1/LanguageSelect"
import CardsSection from "../components/Column1/CardsSection"
import WordInput from "../components/Column2/WordInput"
import SoundFileUpload from "../components/Column2/SoundFileUpload"
import Notes from "../components/Column2/Notes"
import Example from "../components/Column3/Example"
import ImageSection from "../components/Column3/ImageSection"
import ImageUploadAndInfo from "../components/Column3/ImageUploadAndInfo"
import styles from './Main.module.scss'

const Main = () => {
  return (
    <>
      <main id={styles.container}>
        <div id={styles.column1}>
          <LanguageSelect />
          <CardsSection />
        </div>
        <div id={styles.column2}>
          <WordInput />
          <SoundFileUpload />
          <Notes />
        </div>
        <div id={styles.column3}>
          <Example />
          <ImageSection />
          <ImageUploadAndInfo />
        </div>
      </main>
    </>
  )
}

export default Main
