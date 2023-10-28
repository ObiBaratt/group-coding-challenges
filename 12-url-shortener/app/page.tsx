"use client";

import styles from "./page.module.css";
import Header from "./Header";
import InputForm from "./InputForm";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  /* 
    - get URL on form submit
    - store URL in database on form submit
    - function needs to take url parameter from user input
    - hash map to database value
    */

  const submitLongUrlReturnShortUrl = (longUrl: any) => {
    console.log(longUrl);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="Unicorn URL Shortener" />
        <InputForm onSubmitHandler={submitLongUrlReturnShortUrl} />
      </div>
    </main>
  );
}
