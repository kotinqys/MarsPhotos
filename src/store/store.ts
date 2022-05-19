import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import marsReducer from "./reducers/marsReducer";

const reducers = combineReducers({
    marsReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default store;