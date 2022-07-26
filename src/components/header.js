import styles from "./header.module.css"

const Header = (props) => {
    return (
        <header className={styles.header}>
            <a href="https://cg-olimpic.pl/gimnastyka_artystyczna/">
                <img width={115} src="https://cg-olimpic.pl/wp-content/uploads/2020/08/Logo_new_web_1.jpg" alt="CG-Olimpic"/>
            </a>
            <h1>
                Kreator Umów CG-Olimpic
            </h1>

        </header>
    )
}

export default Header