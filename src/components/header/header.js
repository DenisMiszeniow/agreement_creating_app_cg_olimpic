import { LocalizeContainer } from "../localize/localize_container"
import styles from "./header.module.scss"

const Header = (props) => {
    return (
        <header className={styles.header}>
        <LocalizeContainer/>
            <a href="https://cg-olimpic.pl/gimnastyka_artystyczna/">
                <img width={150} src="https://cg-olimpic.pl/wp-content/uploads/2021/08/logo_nature.png" alt="CG-Olimpic"/>
            </a>
            <h1>{props.nameText}</h1>
            <h2>{props.discriptionText}</h2>
        </header>
    )
}

export default Header