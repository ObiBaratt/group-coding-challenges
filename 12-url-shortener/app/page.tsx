"use client";
import { useState } from "react";

import styles from "./page.module.css";
import Header from "./Header";
import InputForm from "./InputForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header title="Unicorn URL Shortener" />
        <InputForm />
      </div>
    </main>
  );
}
