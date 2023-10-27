'use client'

import styles from './page.module.css'
import Header from './Header'
import InputForm from './InputForm'
import { useState } from "react" 

export default function Home() {
  const [url, setUrl] = useState();

  function submitLongUrlReturnShortUrl() {
    console.log("I'm Submitting A Long URL & Getting A Short One In Return!");
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="Unicorn URL Shortener" />
        <InputForm />
      </div>
    </main>
  )
}
