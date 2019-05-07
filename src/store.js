import { combineReducers, createStore, applyMiddleware } from "redux";
import {productReducer} from "./Components";
import thunk from "redux-thunk";
var reducer = combineReducers({productReducer});
var middleWare = applyMiddleware(thunk);
var store = createStore(reducer, middleWare);

export default store;
