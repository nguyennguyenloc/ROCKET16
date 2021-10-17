import * as types from "../Constants/ActionTypes";

export const action_IsShowInputForm = () => {
  return {
    type: types.SHOW_INPUT_FORM,
  };
};

export const action_addAccount = (account) => {
  return {
    type: types.ADD_ACCOUNT,
    account: account,
  };
};

export const action_deleteAccount = (id) => {
  return {
    type: types.DELETE_ACCOUNT,
    id: id,
  };
};
