import { Reducer } from "@reduxjs/toolkit";


const initialState = {
    any:[],
};

const mystore: Reducer<any> = (
  state = initialState,
  action = { type: '@INIT' , payload: undefined}
) => {
  switch (action.type) {
    case 'MYCASE':
      return {
        ...state,
        any:[...state.any],

      };


    default:
      return state;
  }

};

export default mystore;
