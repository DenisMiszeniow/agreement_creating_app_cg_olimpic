import TestButton from "./test_button"
import { connect } from "react-redux"
import { testChild } from "../../../BLL/child_data_reducer.ts"
import { testParrent } from "../../../BLL/parrent_data_reducer.ts"


export const mapStateToProps = (state) => {
    return (
        {}
    )
}
export const TestButtonContainer = connect(mapStateToProps, { testChild, testParrent})(TestButton)