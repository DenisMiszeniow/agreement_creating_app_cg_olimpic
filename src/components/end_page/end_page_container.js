
import { connect } from "react-redux";
import EndPage from "./end_page";


export const mapStateToProps = (state) => {
    return (
        {
           lastPage: state.mainData.lastPage
        }
    )
}

export const mapDispatchToProps = (dispatch) => {
    return (
        {
        }
    )
}

export const EndPageContainer = connect(mapStateToProps, mapDispatchToProps)(EndPage)