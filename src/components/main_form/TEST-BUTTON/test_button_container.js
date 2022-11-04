import TestButton from "./test_button"
import { connect } from "react-redux"
import { testMain } from "../../../BLL/main_state_data_reducer"
import { testChild } from "../../../BLL/child_data_reducer"
import { testParrent } from "../../../BLL/parrent_data_reducer"


export const mapStateToProps = (state) => {
    return (
        {}
    )
}
export const TestButtonContainer = connect(mapStateToProps, {testMain, testChild, testParrent})(TestButton)