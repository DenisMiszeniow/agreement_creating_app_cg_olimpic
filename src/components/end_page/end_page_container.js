
import { connect } from "react-redux";
import { getLastPage } from "../../BLL/Selectors/main_state_selectors";
import EndPage from "./end_page";


export const mapStateToProps = (state) => {
    return (
        {
           lastPage: getLastPage(state)
        }
    )
}

export const EndPageContainer = connect(mapStateToProps)(EndPage)