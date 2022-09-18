import Tasks from "./reducers/reducer";
import { createStore } from "redux";
const store = createStore(Tasks);
export default store;