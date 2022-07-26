import { combineReducers, legacy_createStore } from "redux";
import { mainStateDataReducer } from "./main_state_data_reducer";

const reducers = combineReducers(
    {
        mainData: mainStateDataReducer
    }
)

const store = legacy_createStore(reducers)

export default store
