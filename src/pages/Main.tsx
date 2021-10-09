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
import axios from 'axios'

const Main = () => {
  const [language, setLanguage] = useState("")
  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  const [example, setExample] = useState("")
  const [imageDesc, setImageDesc] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [pronunciation, setPronunciation] = useState<File | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const form = new FormData()
    form.append("language", language)
    form.append("word", word)
    form.append("translation", translation)
    form.append("example", example)
    form.append("imageDesc", imageDesc)
    form.append("image", image as Blob)
    form.append("pronunciation", pronunciation as Blob)

    const response = await axios.post("http://localhost:4000/add_item", form)
    console.log(response.data)

    // console.log("submitted")
  }

  useEffect(() => {
    console.log({
      language, word, translation, example, imageDesc, image, pronunciation
    })
  }, [language, word, translation, example, imageDesc, image, pronunciation])

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
            <SoundFileUpload setPronunciation={setPronunciation} />
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
