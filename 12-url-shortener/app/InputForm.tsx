import styles from './page.module.css'
import { useState } from "react"

// TODO: Need to add prop parameter for "onUpdate"
function InputForm() {
    // TODO: Add handling of state

    // TODO: Add handling of Data Submission

    // TODO: We need to figure out the most appropriate method for styling (i.e. module pattern vs global)
    return (
        <form className={styles.searchForm}>
            <div className={styles.formControl}>
                <label>Enter URL To Be Shortened:</label>
                <input
                    type="url"
                    name="inputUrl"
                    placeholder="https://www.supercalifragilisticexpialidocious.dev/"
                />
                <input type="submit" value="Minify!" className={styles.btnMinify} />
            </div>
        </form>
    )
}

export default InputForm;