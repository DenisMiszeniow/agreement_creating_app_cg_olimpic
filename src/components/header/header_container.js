import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import { initialHeaderLocalesThunk } from "../../BLL/locales_reducer"
import Header from './header'

const mapStateToProps = (state) => {
    return (
        {
            section: state.localesReducer.section.header,
            nameText: state.localesReducer.headerTexts.nameText,
            discriptionText: state.localesReducer.headerTexts.discriptionText
        }
    )
}
export const HeaderContainer = compose(connect (mapStateToProps, {initialHeaderLocalesThunk}), withLocales)(Header)
