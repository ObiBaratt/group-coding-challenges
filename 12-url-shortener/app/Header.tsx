import styles from './page.module.css'

function Header({ title = "Oops! - We're Missing A `title` Prop!" }) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    )
}

export default Header;