import { createStore } from "redux";
import rooted from "./reducer/main";

const saveToLocalStorage=(state)=> {
    try {
      const storededState = JSON.stringify(state);
      sessionStorage.setItem("State", storededState);
    } catch (e) {
      console.warn(e);
    }
  }
  const loadFromLocalStorage=()=> {
    try {
      const storededState = sessionStorage.getItem("State");
      if (storededState === null){
      return undefined;
    }
      return JSON.parse(storededState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const store = createStore(rooted,loadFromLocalStorage())
store.subscribe(() => saveToLocalStorage(store.getState()));


export default store