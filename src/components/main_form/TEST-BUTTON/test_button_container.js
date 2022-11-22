import TestButton from "./test_button"
import { connect } from "react-redux"
import { testChild } from "../../../BLL/child_data_reducer"
import { testParrent } from "../../../BLL/parrent_data_reducer"


export const mapStateToProps = (state) => {
    return (
        {}
    )
}
export const TestButtonContainer = connect(mapStateToProps, { testChild, testParrent})(TestButton)