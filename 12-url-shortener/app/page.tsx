"use client";
import { useState } from "react";

import styles from "./page.module.css";
import Header from "./Header";
import InputForm from "./InputForm";
import { getRandom, setUrl } from "./lib/urlMapper";

export default function Home() {
  const [url, setUrl] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="Unicorn URL Shortener" />
        <InputForm onSubmitHandler={onSubmit} onBtnClickHandler={getRandom} />
      </div>
    </main>
  );
}
