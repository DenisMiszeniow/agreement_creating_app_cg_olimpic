import styles from "./header.module.scss"

const Header = (props) => {
    return (
        <header className={styles.header}>
            <a href="https://cg-olimpic.pl/gimnastyka_artystyczna/">
                <img width={150} src="https://cg-olimpic.pl/wp-content/uploads/2021/08/logo_nature.png" alt="CG-Olimpic"/>
            </a>
            <h1>Generator Umowy CG-Olimpic</h1>
            <h2>TYLKO DLA URZĄDZEŃ DESKTOPOWYCH (Komputery stacjonarne, Laptopy)</h2>

        </header>
    )
}

export default Header