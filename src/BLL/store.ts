import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";

import { childDataReducer } from "./child_data_reducer.ts";
import { mainStateDataReducer } from "./main_state_data_reducer.ts";
import { parrentDataReducer } from './parrent_data_reducer.ts'
import thunk from 'redux-thunk'
import { localesReducer } from "./locales_reducer.ts";

const rootReducer = combineReducers(
    {
        mainData: mainStateDataReducer,
        parrentData: parrentDataReducer,
        childData: childDataReducer,
        localesReducer: localesReducer
    }
)

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
//@ts-ignore
window.store = store;
export default store
