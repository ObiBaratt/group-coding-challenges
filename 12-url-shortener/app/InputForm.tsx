import { useCallback, useEffect, useState } from "react";
import styles from "./page.module.css";
import debounce from "lodash.debounce";

// TODO: Need to add prop parameter for "onUpdate"
function InputForm(props: any) {
  // TODO: Add handling of state
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState("");
  const [valid, setValid] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) {
      console.log({ url }, { shortened });
      const requestUrl = `/shorten/${shortened}?url=${url}`;
      fetch(requestUrl, { method: "post" });
    } else {
      alert("Shortened URL is not valid. Please try again.");
    }
  };

  const checkShortStringValiditiy = useCallback(
    debounce(async (input: string) => {
      const response = await fetch(`/check/${input}`, { method: "get" });
      const isValid = await response.json();

      return isValid.found;
    }, 500),
    []
  );

  useEffect(() => {
    if (shortened.length > 0) {
      checkShortStringValiditiy(shortened)?.then((isValid) => {
        setValid(isValid);
      });
    }
  }, [shortened]);

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
