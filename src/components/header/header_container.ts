import { HeaderTextsType } from './../../types/types';
//@ts-ignore
import { setLocalesThunk } from './../../BLL/locales_reducer.ts';
import { AppStateType } from './../../BLL/store';
import { connect } from "react-redux"
import { compose } from "redux"
import { withLocales } from "../../HOC/withLocales"
//@ts-ignore
import Header from './header.tsx'
//@ts-ignore
import { getHeaderText, getSectionHeader } from "../../BLL/Selectors/locales_selectors.ts"

type MapStatePropsType = {
    section: string
    headerText: HeaderTextsType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return (
        {
            section: getSectionHeader(state),
            headerText: getHeaderText(state)
        }
    )
}
//@ts-ignore
export const HeaderContainer = compose(connect(mapStateToProps, {setLocalesThunk}), withLocales)(Header)
