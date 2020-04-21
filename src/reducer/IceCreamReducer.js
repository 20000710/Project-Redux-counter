import { INCREMENT, DECREMENT } from "../action/IceCreamAction";

const initState = {
  icecream: 0
};

const icecream = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        icecream: state.icecream + 1
      };

    case DECREMENT:
      return {
        ...state,
        icecream: state.icecream - 1
      };
    default:
      return state;
  }
};

export default icecream;
