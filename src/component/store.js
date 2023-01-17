import { createStore } from "redux";
import rooted from "../redux/reducer/main";

const store = createStore(rooted)

export default store