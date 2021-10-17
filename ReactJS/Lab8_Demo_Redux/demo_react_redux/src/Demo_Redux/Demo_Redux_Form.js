import { createStore } from "redux";
import RootReducer from "./Reducers/index";
import { action_IsShowInputForm } from "./Action/index";
import { action_addAccount } from "./Action/index";

const store = createStore(RootReducer);
console.log("before action new:", store.getState());
store.dispatch(action_IsShowInputForm());
console.log("after action new:", store.getState());

let account = {
  id: 1,
  name: "loc nguyen",
};
store.dispatch(action_addAccount(account));
console.log("After", store.getState());

// let id = 1;
// store.dispatch(action_deleteAccount(id));
// console.log("After", store.getState());
