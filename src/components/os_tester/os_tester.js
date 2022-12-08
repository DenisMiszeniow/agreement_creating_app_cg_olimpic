import { useEffect } from "react"
import Preloader from "../preloader/preloader"
import { RoutersContainer } from "../routers/routers_container"

const OsTester = (props) => {
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


