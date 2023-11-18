import { useState } from "react";
import { getRandom, setUrl } from "./lib/urlMapper";

import styles from "./page.module.css";

// TODO: Need to add prop parameter for "onUpdate"
function InputForm(props: any) {
  // TODO: Add handling of state
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ url }, { shortened });
    const requestUrl = `/shorten/${shortened}?url=${url}`;
    fetch(requestUrl, { method: "post" });
  };

  // TODO: Add handling of Data Submission

  // TODO: We need to figure out the most appropriate method for styling (i.e. module pattern vs global)
  return (
    <form className={styles.searchForm} onSubmit={onSubmit}>
      <div className={styles.formControl}>
        <label>Enter URL To Be Shortened:</label>
        <input
          type="url"
          name="inputUrl"
          placeholder="https://www.supercalifragilisticexpialidocious.dev/"
          onChange={(e) => setUrl(e.target.value)}
        />

        <label>Enter what you want short URL to look like:</label>
        <input
          type="text"
          name="shortened"
          onChange={(e) => setShortened(e.target.value)}
        />

        <button type="submit" className={styles.btnMinify}>
          Minify!
        </button>
      </div>
    </form>
  );
}

export default InputForm;
