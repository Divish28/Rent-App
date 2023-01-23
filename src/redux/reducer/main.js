import { combineReducers } from "redux";
import { displayreducer } from "./dispreducer";
import { shortlistReducer } from "./reducer";

const rooted= combineReducers({
    shortlistReducer
})

export default rooted