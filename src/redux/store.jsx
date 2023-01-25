import { createStore } from "redux";
import rooted from "./reducer/main";

const store = createStore(rooted)

export default store