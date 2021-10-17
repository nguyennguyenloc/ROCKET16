import { createStore } from "redux";

//B3: tạo ra initialState
var initialState = {
  isShowInputForm: false,
  listAccount: [],
};
//B2: tạo ra Reducer
var Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      let isShowInputForm1 = !state.isShowInputForm;
      return {
        ...state,
        isShowInputForm: isShowInputForm1,
      };
    case "ADD_ACCOUNT":
      let account_new = action.account;
      let listAccount_new = [];
      listAccount_new = state.listAccount;
      listAccount_new.push(account_new);
      return {
        ...state,
        listAccount: listAccount_new,
      };

    default:
      return state;
  }
};
// B1: tạo ra Store
const store = createStore(Reducer);

//B4: tạo ra action
var action_IsShowInputForm = { type: "SHOW_INPUT_FORM" };
var action_addAccount = {
  type: "ADD_ACCOUNT",
  account: {
    id: 2,
    name: "Loc",
  },
};
//Dispath store
console.log("State ban đầu", store.getState());
store.dispatch(action_IsShowInputForm);

console.log("State sau khi thay đổi bởi redux", store.getState());

//B6
console.log("State ban đầu trước khi gọi add_account", store.getState());
store.dispatch(action_addAccount);

console.log("State sau khi thay đổi add_account bởi redux", store.getState());
