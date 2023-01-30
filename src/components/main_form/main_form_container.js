import { connect } from "react-redux";
// import MainForm from "./main_form";
import { setLocalesThunk } from "../../BLL/locales_reducer.ts";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";
import { getSectionMainForm } from "../../BLL/Selectors/locales_selectors.ts";
import { lazy } from "react";
import { withLazyLoading } from "../../HOC/withLazyLoading";

const MainForm = lazy(() => import ('./main_form'))

const MapStateToProps = (state) => ({section: getSectionMainForm(state)})
 

export const MainFormContainer = compose(connect (MapStateToProps, {setLocalesThunk}), withLocales)(withLazyLoading(MainForm))