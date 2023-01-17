import { combineReducers } from "redux";
import { shortlistReducer } from "./reducer";

const rooted= combineReducers({
    shortlistReducer
})

export default rooted