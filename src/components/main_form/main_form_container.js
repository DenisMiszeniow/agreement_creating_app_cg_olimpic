import { connect } from "react-redux";
import MainForm from "./main_form";
import { initialMainFormLocalesThunk } from "../../BLL/locales_reducer";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";

const MapStateToProps = (state) => ({section: state.localesReducer.section.mainForm})
 

export const MainFormContainer = compose(connect (MapStateToProps, {initialMainFormLocalesThunk}), withLocales)(MainForm)