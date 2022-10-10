import { createStore } from "redux";
import { combineReducers } from "redux";

import wordAdder from "../modules/todos";

const rootReducer = combineReducers({
  wordAdder: wordAdder,
});
const store = createStore(rootReducer);

export default store;
