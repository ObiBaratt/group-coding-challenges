"use client";

import styles from "./page.module.css";
import Header from "./Header";
import InputForm from "./InputForm";
import { getRandom, setUrl } from "./lib/urlMapper";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="Unicorn URL Shortener" />
        <InputForm onSubmitHandler={getRandom} />
      </div>
    </main>
  );
}
