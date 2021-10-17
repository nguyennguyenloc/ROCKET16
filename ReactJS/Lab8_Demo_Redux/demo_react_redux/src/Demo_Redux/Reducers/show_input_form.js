import * as types from "../Constants/ActionTypes";

var initialState = false;

var Reducer = (state = initialState, action) => {
  if (action.types === types.SHOW_INPUT_FORM) {
    let isShowInputForm1 = !state.isShowInputForm;
    return {
      ...state,
      isShowInputForm: isShowInputForm1,
    };
  } else {
    return state;
  }
};

export default Reducer;
