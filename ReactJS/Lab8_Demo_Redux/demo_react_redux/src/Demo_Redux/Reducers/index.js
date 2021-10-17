import { combineReducers } from "redux";
import listAccount from "./add_account";
import isShowInputForm from "./show_input_form";

const RootReducer = combineReducers({
  isShowInputForm: isShowInputForm,
  listAccount: listAccount,
});

export default RootReducer;
