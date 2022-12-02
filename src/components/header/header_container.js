import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import { initialHeaderLocalesThunk } from "../../BLL/locales_reducer"
import Header from './header'
import { getHeaderDiscriptiontext, getHeaderNameText, getSectionHeader } from "../../BLL/Selectors/locales_selectors"

const mapStateToProps = (state) => {
    return (
        {
            section: getSectionHeader(state),
            nameText: getHeaderNameText(state),
            discriptionText: getHeaderDiscriptiontext(state)
        }
    )
}
export const HeaderContainer = compose(connect (mapStateToProps, {initialHeaderLocalesThunk}), withLocales)(Header)
