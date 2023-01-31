import { AppStateType } from './../../BLL/store';
import { connect } from "react-redux";
// import MainForm from "./main_form";
//@ts-ignore
import { setLocalesThunk } from "../../BLL/locales_reducer.ts";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";
//@ts-ignore
import { getSectionMainForm } from "../../BLL/Selectors/locales_selectors.ts";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";

//@ts-ignore
const MainForm = lazy(() => import ('./main_form.tsx'))

type MapStateToPropsType = {
    section: String
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({section: getSectionMainForm(state)})
 
//@ts-ignore
export const MainFormContainer = compose(connect (MapStateToProps, {setLocalesThunk}), withLocales)(withLazyLoading(MainForm))