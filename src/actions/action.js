import {createStore} from "redux";
import "../reducers/reducers"
import counterReducer from "../reducers/reducers";

const store = createStore(counterReducer);

export default store;
