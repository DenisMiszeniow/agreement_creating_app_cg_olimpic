import { FC, useEffect } from "react"
import Preloader from "../preloader/preloader.tsx"
import { OsTestTextType } from "../../types/types"

type PropsType = {
    language: string
    section: string
    localesTexts: OsTestTextType
    setLocalesThunk: (language: string, section: string) => void
}

const OsTester: FC<PropsType> = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { props.setLocalesThunk(props.language, props.section) }, [props.language])
        return !props.localesTexts
            ? <Preloader />
            : <div>
                <h3>{props.localesTexts.h3Text}</h3>
                <p>{props.localesTexts.pText}</p>
                <a href="https://cg-olimpic.pl">CG-OlIMPIC.PL</a>
            </div>
}

export default OsTester


