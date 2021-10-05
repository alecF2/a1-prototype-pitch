import LanguageSelect from "../components/Column1/LanguageSelect"
import CardsSection from "../components/Column1/CardsSection"
import WordInput from "../components/Column2/WordInput"
import SoundFileUpload from "../components/Column2/SoundFileUpload"
import Notes from "../components/Column2/Notes"
import Example from "../components/Column3/Example"
import ImageSection from "../components/Column3/ImageSection"
import ImageUploadAndInfo from "../components/Column3/ImageUploadAndInfo"
import styles from './Main.module.scss'
import { FormEvent, useState, useEffect } from "react"

const Main = () => {
  const [language, setLanguage] = useState("")
  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  const [example, setExample] = useState("")
  const [imageDesc, setImageDesc] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("submitted")
  }

  useEffect(() => {
    console.log({
      language, word, translation, example, imageDesc
    })
  }, [language, word, translation, example, imageDesc])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id={styles.container}>
          <div id={styles.column1}>
            <LanguageSelect setLanguage={setLanguage} />
            <CardsSection />
          </div>
          <div id={styles.column2}>
            <WordInput setWord={setWord} setTranslation={setTranslation} />
            <SoundFileUpload />
            <Notes />
          </div>
          <div id={styles.column3}>
            <Example setExample={setExample} />
            <ImageSection />
            <ImageUploadAndInfo setImage={setImage} setImageDesc={setImageDesc} />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Main
