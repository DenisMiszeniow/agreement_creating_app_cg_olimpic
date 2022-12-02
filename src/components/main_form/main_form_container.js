import { connect } from "react-redux";
import MainForm from "./main_form";
import { initialMainFormLocalesThunk } from "../../BLL/locales_reducer";
import { compose } from "redux";
import { withLocales } from "../../HOC/withLocales";
import { getSectionMainForm } from "../../BLL/Selectors/locales_selectors";

const MapStateToProps = (state) => ({section: getSectionMainForm(state)})
 

export const MainFormContainer = compose(connect (MapStateToProps, {initialMainFormLocalesThunk}), withLocales)(MainForm)