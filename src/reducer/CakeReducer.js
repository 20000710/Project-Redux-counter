import { INCREMENTCAKE, DECREMENTCAKE } from "../action/CakeAction";

const initState = {
  cake: 0
};

const cake = (state = initState, action) => {
  switch (action.type) {
    case INCREMENTCAKE:
      return {
        ...state,
        cake: state.cake + 1
      };

    case DECREMENTCAKE:
      return {
        ...state,
        cake: state.cake - 1
      };

    default:
      return state;
  }
};

export default cake;
