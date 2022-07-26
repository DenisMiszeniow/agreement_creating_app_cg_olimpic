
import { connect } from "react-redux";
import Routers from "./routers";



export const mapStateToProps = (state) => {
    return (
        {
            agreementRoute: state.mainData.agreementRoute,
            downloadRoute: state.mainData.downloadRoute,
        }
    )
}

export const RoutersContainer = connect(mapStateToProps)(Routers)