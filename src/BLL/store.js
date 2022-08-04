import { combineReducers, legacy_createStore } from "redux";
import { childDataReducer } from "./child_data_reducer";
import { mainStateDataReducer } from "./main_state_data_reducer";
import { parrentDataReducer } from "./parrent_data_reducer";

const reducers = combineReducers(
    {
        mainData: mainStateDataReducer,
        parrentData: parrentDataReducer,
        childData: childDataReducer
    }
)

const store = legacy_createStore(reducers)
window.store = store;
export default store
