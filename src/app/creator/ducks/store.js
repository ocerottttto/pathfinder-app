import { createStore } from 'redux';
import rootReducer from "./character";

const store = createStore(rootReducer);

export default store;