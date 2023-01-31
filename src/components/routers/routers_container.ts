import { AppStateType } from './../../BLL/store';

import { connect } from "react-redux";
//@ts-ignore
import Routers from "./routers.tsx";

type MapdStateToPropsType = {
    agreementRoute: string,
    downloadRoute: string
}


export const mapStateToProps = (state: AppStateType): MapdStateToPropsType => {
    return (
        {
            agreementRoute: state.mainData.agreementRoute,
            downloadRoute: state.mainData.downloadRoute,
        }
    )
}

export const RoutersContainer = connect(mapStateToProps)(Routers)