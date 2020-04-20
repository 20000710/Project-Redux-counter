import { INCREMENT, DECREMENT } from "../action/action";

const initState = {
  item: 0
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        item: state.item + 1
      };

    case DECREMENT:
      return {
        ...state,
        item: state.item - 1
      };
    default:
      return state;
  }
};

export default counter;
