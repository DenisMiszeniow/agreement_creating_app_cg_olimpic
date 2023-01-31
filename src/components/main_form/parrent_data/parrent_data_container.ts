import { AppStateType } from './../../../BLL/store';
import { connect } from "react-redux";
//@ts-ignore
import { onParrentName, onParrentIdCard, onParrentCity, onParrentZipCode, onParrentAddress } from "../../../BLL/parrent_data_reducer.ts";
//@ts-ignore
import { getParentText } from "../../../BLL/Selectors/locales_selectors.ts";
import {
    getParentAddressSelector, getParentCitySelector, getParentIdCardSelector,
    //@ts-ignore
    getParentNameSelector, getParentZipCodeSelector} from "../../../BLL/Selectors/parent_data_selectors.ts";
    //@ts-ignore
import ParrentData from "./parrent_data.tsx";
import { ParrentDataTextType } from "../../../types/types.js";

type MapStateToPropsType = {
    parrentName: string
    parrentIdCard: string
    parrentCity: string
    parrentZipCode: string
    parrentAddress: string
    localesTexts: ParrentDataTextType
}

export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return (
        {
            parrentName: getParentNameSelector(state),
            parrentIdCard: getParentIdCardSelector(state),
            parrentCity: getParentCitySelector(state),
            parrentZipCode: getParentZipCodeSelector(state),
            parrentAddress: getParentAddressSelector(state),
            localesTexts: getParentText(state)
        }
    )
}

export const ParrentDataContainer = connect(mapStateToProps, {
    onParrentName, onParrentIdCard, onParrentZipCode,
    onParrentCity, onParrentAddress
})(ParrentData)