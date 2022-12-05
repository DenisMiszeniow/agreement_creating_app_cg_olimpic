import { useEffect } from "react"
import { LocalesContainer } from "../locales/locales_container"
import Preloader from "../preloader/preloader"
import styles from "./header.module.scss"

const Header = (props) => {
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
    return <header className={styles.header}>
            <LocalesContainer />
            <a href="https://cg-olimpic.pl/gimnastyka_artystyczna/">
                <img width={150} src="https://cg-olimpic.pl/wp-content/uploads/2021/08/logo_nature.png" alt="CG-Olimpic" />
            </a>
            {!props.headerText 
            ? <Preloader/> 
            : <><h1>{props.headerText.nameText}</h1>
            <h2>{props.headerText.discriptionText}</h2></>}
            
        </header>

}

export default Header