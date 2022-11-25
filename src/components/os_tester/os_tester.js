import { useEffect } from "react"
import { propTypes } from "react-bootstrap/esm/Image"
import { RoutersContainer } from "../routers/routers_container"

const OsTester = (props) => {
    useEffect(()=> {props.osTestLocalesThunk(props.language, props.section)}, [props.language])
    if ((navigator.appVersion.indexOf('iPhone') !== -1) || (navigator.appVersion.indexOf('iPad') !== -1)) {
        return (
            <div>
                <h3>{props.localesTexts.h3Text}</h3> 
                <p>{props.localesTexts.pText}</p>
                <a href="https://cg-olimpic.pl">CG-OlIMPIC.PL</a>
            </div>
        )
    } else {
        return (
            <div className='content-container'>
                <RoutersContainer />
            </div>
            
        )
    }
}

export default OsTester


