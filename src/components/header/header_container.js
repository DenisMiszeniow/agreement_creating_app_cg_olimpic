import { connect } from "react-redux"
import Header from './header'

const mapStateToProps = (state) => {
    return (
        {
            nameText: state.localizeReducer.texts.headerText.nameText,
            discriptionText: state.localizeReducer.texts.headerText.discriptionText
        }
    )
}

export const HeaderContainer = connect (mapStateToProps)(Header)