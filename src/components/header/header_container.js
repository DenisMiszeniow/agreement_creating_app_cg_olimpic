import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
import { setLocalesThunk } from "../../BLL/locales_reducer"
import Header from './header'
import { getHeaderText, getSectionHeader } from "../../BLL/Selectors/locales_selectors"

const mapStateToProps = (state) => {
    return (
        {
            section: getSectionHeader(state),
            headerText: getHeaderText(state)
        }
    )
}
export const HeaderContainer = compose(connect (mapStateToProps, {setLocalesThunk}), withLocales)(Header)
