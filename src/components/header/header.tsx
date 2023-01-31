
import { HeaderTextsType } from '../../types/types.js';
import { useEffect, FC } from "react"
//@ts-ignore
import { LocalesContainer } from "../locales/locales_container.ts"
//@ts-ignore
import Preloader from "../preloader/preloader.tsx"
import styles from "./header.module.scss"


type PropsType = {
    section: string
    headerText: HeaderTextsType
    language?: string
    setLocalesThunk: (language: string, section: string) => void
}

const Header: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
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