import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { childDataReducer } from "./child_data_reducer";
import { mainStateDataReducer } from "./main_state_data_reducer";
import { parrentDataReducer } from "./parrent_data_reducer";
import thunk from 'redux-thunk'
import { localesReducer } from "./locales_reducer";

const reducers = combineReducers(
    {
        mainData: mainStateDataReducer,
        parrentData: parrentDataReducer,
        childData: childDataReducer,
        localesReducer: localesReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store;
export default store
