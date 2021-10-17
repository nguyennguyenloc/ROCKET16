import * as types from "../Constants/ActionTypes";

var initialState = {
  listAccount: [],
};

var Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACCOUNT:
      let account_new = action.account;
      let listAccount_new = [];
      listAccount_new = state.listAccount;
      listAccount_new.push(account_new);
      return {
        ...state,
        listAccount: listAccount_new,
      };
    case types.DELETE_ACCOUNT:
      let id = action.id;
      console.log("ok id", id);
      break;
    default:
      break;
  }
};

export default Reducer;
